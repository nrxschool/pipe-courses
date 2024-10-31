// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

async function getBlocks() {
  const blockTypes = ["earliest", "latest", "pending", "finalized", "safe"];
  
  for (const type of blockTypes) {
    const block = await provider.getBlock(type);
    console.log("================================================");
    console.log(`${type.toUpperCase()} BLOCK`);
    console.log("================================================");
    console.log(block);
  }
}

getBlocks();
