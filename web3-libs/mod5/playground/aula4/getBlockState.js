// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from "viem";
import { anvil } from "viem/chains";

// 2. Configure o client
const client = createPublicClient({
  transport: http(),
  chain: anvil
});

async function fetchBlocks() {
  const blockTypes = ["earliest", "latest", "pending", "finalized", "safe"];
  const blocks = [];
  
  for (const type of blockTypes) {
    const block = await client.getBlock({blockTag: type});
    blocks.push({
      Type: type.toUpperCase(),
      Block: block.number
    });
  }
  console.table(blocks);
}

fetchBlocks();
