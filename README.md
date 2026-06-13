# @0xward/aetheros-core

[![NPM Version](https://img.shields.io/npm/v/@0xward/aetheros-core)](https://www.npmjs.com/package/@0xward/aetheros-core)
[![NPM Downloads](https://img.shields.io/npm/dm/@0xward/aetheros-core)](https://www.npmjs.com/package/@0xward/aetheros-core)
[![License](https://img.shields.io/npm/l/@0xward/aetheros-core)](https://opensource.org/licenses/MIT)

An enterprise-grade software development kit engineered to map decentralized identity relational graphs and manage network intelligence tasks directly linked to Clarity smart contracts on the Stacks blockchain.

---

## Installation

```bash
npm install @0xward/aetheros-core
```

---

## Core Capabilities

* **Bitcoin Anchor Verification:** Features programmatic verification tools to check Stacks transaction anchorage status on the Bitcoin L1 baseline.
* **Clarity Contract Bindings:** Built-in compiler-ready data encoding structures conforming to Clarity 4.0 execution layer requirements.
* **Compute Guard Protocols:** Hardened payload formatting to safely transmit queries to specialized computational environments.

---

## Quick Start

```javascript
const { AetherOS } = require("@0xward/aetheros-core");
const node = new AetherOS("credentials_token_hash");

async function execute() {
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
| `queryIntelligence` | `prompt: string` | `Promise<Object>` | Submits validation requests to the intelligence interface. |
| `verifyOnChainState` | `txId: string` | `Promise<Object>` | Tracks block hash states to cross-verify Bitcoin confirmation indices. |

---

## License

This project is licensed under the terms of the MIT License.