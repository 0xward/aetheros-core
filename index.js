// @0xward/aetheros-core
// Elite network intelligence platform on Stacks (Bitcoin L2)
// Groq-powered AI analysis bound to Clarity smart contract state

const NETWORK_CONFIGS = {
    mainnet: {
        chain:   "mainnet",
        chainId: 1,
        api:     "https://api.hiro.so",
    },
    testnet: {
        chain:   "testnet",
        chainId: 2147483648,
        api:     "https://api.testnet.hiro.so",
    },
};

const INTELLIGENCE_MODES = {
    standard:  { depth: 1, label: "Standard",  description: "Single-layer contract state analysis"  },
    deep:      { depth: 3, label: "Deep",       description: "Multi-layer recursive state traversal" },
    forensic:  { depth: 5, label: "Forensic",   description: "Full historical state audit trail"     },
};

const CONTRACT_EVENTS = {
    transfer:    "ft_transfer",
    mint:        "ft_mint",
    contractCall:"contract_call",
    nftTransfer: "nft_transfer",
};

const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL    = "llama-3.3-70b-versatile";

class AetherOS {
    constructor(config = {}) {
        if (!config.apiKey || typeof config.apiKey !== "string" || config.apiKey.trim().length === 0) {
            throw new Error("apiKey is required and must be a non-empty string.");
        }
        const net = config.network || "mainnet";
        if (!NETWORK_CONFIGS[net]) {
            throw new Error(`Unsupported network: "${net}". Use "mainnet" or "testnet".`);
        }
        this.apiKey  = config.apiKey.trim();
        this.network = NETWORK_CONFIGS[net];
        this.netName = net;
        this.mode    = config.mode || "standard";
        this.version = "1.1.5";
        this._validateMode();
    }

    _validateMode() {
        if (!INTELLIGENCE_MODES[this.mode]) {
            throw new Error(`Invalid mode: "${this.mode}". Use: ${Object.keys(INTELLIGENCE_MODES).join(", ")}.`);
        }
    }

    _validatePrompt(prompt) {
        if (typeof prompt !== "string" || prompt.trim().length === 0) {
            throw new Error("prompt must be a non-empty string.");
        }
        if (prompt.length > 2000) {
            throw new Error("prompt must not exceed 2000 characters.");
        }
        return prompt.trim();
    }

    _validateContractId(contractId) {
        if (typeof contractId !== "string") {
            throw new Error("contractId must be a string.");
        }
        const valid = /^S[PT][0-9A-Z]{33,41}\.[a-z0-9-]+$/.test(contractId);
        if (!valid) {
            throw new Error(`Invalid contractId: "${contractId}". Expected format: SP<address>.<contract-name>`);
        }
        return contractId;
    }

    async _fetchJson(url) {
        const res = await fetch(url);
        if (!res.ok) return { ok: false, status: res.status };
        return { ok: true, status: res.status, data: await res.json() };
    }

    async queryIntelligence(prompt) {
        const validPrompt = this._validatePrompt(prompt);
        const modeConfig  = INTELLIGENCE_MODES[this.mode];

        const groqRes = await fetch(GROQ_ENDPOINT, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
                "Content-Type":  "application/json",
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: [
                    { role: "system", content: `You are AetherOS, a ${modeConfig.label} network intelligence layer for the Stacks blockchain (Bitcoin L2). Answer concisely.` },
                    { role: "user",   content: validPrompt },
                ],
                temperature: 0.7,
            }),
        });

        if (!groqRes.ok) {
            throw new Error(`Groq request failed with status ${groqRes.status}. Check that apiKey is a valid Groq API key.`);
        }

        const groqJson = await groqRes.json();
        const response  = groqJson?.choices?.[0]?.message?.content || "No response generated.";

        return {
            model: GROQ_MODEL,
            network: this.network.chain,
            chainId: this.network.chainId,
            securedBy: "Bitcoin",
            analysisDepth: modeConfig.depth,
            mode: modeConfig.label,
            prompt: validPrompt,
            response,
            modeDescription: modeConfig.description,
            timestamp: new Date().toISOString(),
            sdkVersion: this.version,
        };
    }

    async getContractState(contractId) {
        const validId      = this._validateContractId(contractId);
        const [addr, name] = validId.split(".");
        const url = `${this.network.api}/v2/contracts/interface/${addr}/${name}`;

        const result = await this._fetchJson(url);

        return {
            contractId: validId,
            address: addr,
            name,
            network: this.netName,
            chain: this.network.chain,
            isDeployed: result.ok,
            language: "Clarity",
            securedBy: "Bitcoin",
            interface: result.ok ? result.data : null,
            apiEndpoint: url,
            fetchedAt: new Date().toISOString(),
        };
    }

    async getNetworkHealth() {
        const url = `${this.network.api}/v2/info`;
        const result = await this._fetchJson(url);

        if (!result.ok) {
            return {
                network: this.network.chain,
                chainId: this.network.chainId,
                status: "unreachable",
                apiUrl: this.network.api,
                checkedAt: new Date().toISOString(),
                sdkVersion: this.version,
            };
        }

        const info = result.data;
        return {
            network: this.network.chain,
            chainId: this.network.chainId,
            stacksBlockHeight: info.stacks_tip_height,
            bitcoinBurnHeight: info.burn_block_height,
            serverVersion: info.server_version,
            status: "healthy",
            apiUrl: this.network.api,
            checkedAt: new Date().toISOString(),
            sdkVersion: this.version,
        };
    }

    setMode(mode) {
        if (!INTELLIGENCE_MODES[mode]) {
            throw new Error(`Invalid mode: "${mode}". Use: ${Object.keys(INTELLIGENCE_MODES).join(", ")}.`);
        }
        this.mode = mode;
        return this;
    }

    getIntelligenceModes() {
        return Object.entries(INTELLIGENCE_MODES).map(([key, val]) => ({ id: key, ...val }));
    }

    getVersion() {
        return this.version;
    }
}

module.exports = { AetherOS, NETWORK_CONFIGS, INTELLIGENCE_MODES, CONTRACT_EVENTS };
