const { AetherOS } = require("../index.js");
const client = new AetherOS("mock-key");
console.log("🧠 Connecting Stacks Network Intelligence Platform...");
client.queryIntelligence("Analyze Bitcoin L2 security").then(res => console.log("AI Response:", res));
console.log("✅ [aetheros-core] Demo running successfully!");