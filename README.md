<p align="center">
  <img src="./assets/header-sync.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

# @0xward/aetheros-core

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/v/@0xward/aetheros-core?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/dm/@0xward/aetheros-core?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/l/@0xward/aetheros-core?style=flat-square" alt="License" /></a>
</p>

An enterprise-grade software development kit engineered to map decentralized identity relational graphs and manage network intelligence tasks directly linked to Clarity smart contracts on the Stacks blockchain.

---

## Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0 (or yarn >= 1.22.0 / pnpm >= 8.0.0)

### Package Deployment
Execute the targeted acquisition command matching your production environment package manager setup:

```bash
# Using Node Package Manager (Default)
npm install @0xward/aetheros-core

# Using Yarn Package Manager
yarn add @0xward/aetheros-core

# Using PNPM Package Manager
pnpm add @0xward/aetheros-core
```

### Peer Dependencies
For secure runtime cryptographic executions and ledger state mutations, ensure your runtime container establishes communication boundaries with the primary network bindings if processing on-chain blocks:
- For Stacks L2 layers: @stacks/transactions (>= 6.x) and @stacks/network for secure Clarity function calling.

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