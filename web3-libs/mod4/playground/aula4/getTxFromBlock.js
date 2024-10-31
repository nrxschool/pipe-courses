// 1. Instale e importe a biblioteca Ethers
import { ethers } from "ethers";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  console.log("Do you want to consult some transactions?");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter block hash (or none for the latest block): ",
    async (answer) => {
      if (answer === "") {
        const currentBlockNumber = await provider.getBlockNumber();
        const block = await provider.getBlock(currentBlockNumber);
        const txCount = block.transactionCount;

        console.log(`This block hash ${txCount} Transaction`);
        
        // Alterado para obter transações separadamente
        const transactions = await Promise.all(
          block.transactions.map(txHash => provider.getTransaction(txHash))
        );
        
        console.log(transactions);
      } else {
        const tx = await provider.getTransaction(answer);
        const block = await provider.getBlock(tx.blockNumber);
        const txCount = block.transactionCount;
        console.log(`This block hash ${txCount} Transaction`);
        console.log(tx);
      }
      rl.close();
    }
  );
}

main();
