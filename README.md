<p align="center">
</p>

# @0xward/aetheros-core

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/v/@0xward/aetheros-core?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/dm/@0xward/aetheros-core?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/l/@0xward/aetheros-core?style=flat-square" alt="License" /></a>
</p>

A lightweight SDK for reading live state from the Stacks blockchain (Bitcoin L2) — network health and Clarity contract interfaces straight from the Hiro API — with an optional Groq-powered analysis layer on top.

Built for and used by [AetherOS](https://github.com/0xward/AetherOS).

---

## Installation

### Prerequisites
- Node.js >= 18.0.0 (uses the built-in `fetch`)

### Package Deployment
```bash
npm install @0xward/aetheros-core
# or
yarn add @0xward/aetheros-core
# or
pnpm add @0xward/aetheros-core
```

---

## Core Capabilities

* **Live Network Health:** Pulls current Stacks block height and Bitcoin burn height straight from the Hiro API.
* **Clarity Contract Lookups:** Checks whether a given `SP…`/`ST…` contract is deployed and returns its public interface.
* **Groq-Powered Analysis:** Optional natural-language queries about network/contract context, answered via Groq.

---

## Quick Start

```javascript
const { AetherOS } = require("@0xward/aetheros-core");

const node = new AetherOS({
  apiKey: process.env.GROQ_API_KEY,
  network: "mainnet", // or "testnet"
});

async function execute() {
  const health = await node.getNetworkHealth();
  console.log("Network health:", health);

  const analysis = await node.queryIntelligence("Verify L2 block integrity parameters");
  console.log("Analysis Output:", analysis);
}
execute();
```

---

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `queryIntelligence` | `prompt: string` | `Promise<Object>` | Sends `prompt` to Groq along with network context and returns the model's answer. |
| `getContractState` | `contractId: string` | `Promise<Object>` | Fetches a Clarity contract's interface from the Hiro API. |
| `getNetworkHealth` | — | `Promise<Object>` | Fetches current Stacks block height and Bitcoin burn height. |
| `setMode` | `mode: string` | `AetherOS` | Switches analysis depth: `standard`, `deep`, or `forensic`. |
| `getIntelligenceModes` | — | `Array<Object>` | Lists available analysis modes. |
| `getVersion` | — | `string` | Returns the current SDK version. |

---

## License

This project is licensed under the terms of the MIT License.
