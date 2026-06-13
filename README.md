<p align="center">
  <img src="https://raw.githubusercontent.com/SamAnand/SVG-Animations/master/grid.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

<p align="center">
  <img src="./assets/header-sync.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

# @0xward/aetheros-core

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/v/@0xward/aetheros-core?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/dm/@0xward/aetheros-core?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/aetheros-core"><img src="https://img.shields.io/npm/l/@0xward/aetheros-core?style=flat-square" alt="License" /></a>
</p>

AetherOS Stacks Network Intelligence SDK—core computational logic for decentralized intelligence frameworks built on STACKS ecosystems.


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