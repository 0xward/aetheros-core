const { AetherOS } = require("../index.js");

// apiKey here must be a real Groq API key (https://console.groq.com) for
// queryIntelligence() to work. getNetworkHealth() / getContractState() only
// need any non-empty string since they call the public Stacks API.
const client = new AetherOS({
  apiKey: process.env.GROQ_API_KEY || "mock-key",
  network: "mainnet",
  mode: "standard",
});

async function main() {
  console.log("AetherOS SDK v" + client.getVersion());

  console.log("\n🌐 Checking Stacks network health...");
  const health = await client.getNetworkHealth();
  console.log(health);

  console.log("\n📜 Fetching contract state...");
  // 👇 replace with your actual deployed contract address + name
  const state = await client.getContractState(
    "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.aetheros-bounty-registry"
  );
  console.log(state);

  if (process.env.GROQ_API_KEY) {
    console.log("\n🧠 Querying intelligence layer...");
    const analysis = await client.queryIntelligence(
      "Summarize the current Stacks network status in one sentence."
    );
    console.log(analysis);
  } else {
    console.log("\n🧠 Skipping queryIntelligence demo: set GROQ_API_KEY to try it.");
  }

  console.log("\n✅ [aetheros-core] Demo finished.");
}

main().catch((err) => {
  console.error("Demo failed:", err.message);
  process.exit(1);
});
