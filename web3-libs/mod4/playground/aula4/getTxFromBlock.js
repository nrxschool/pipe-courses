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
        
        const transactions = await Promise.all(
          block.transactions.map(txHash => provider.getTransaction(txHash))
        );
        
        console.log(transactions);
      } else {
        // Verifica se o hash do bloco é válido
        if (!/^0x[a-fA-F0-9]{64}$/.test(answer)) {
          console.error("Invalid block hash. Please enter a valid hash.");
          rl.close();
          return;
        }

        const block = await provider.getBlock(answer);
        if (!block) {
          console.error("Block not found. Please check the hash.");
        } else {
          const txCount = block.transactionCount;
          console.log(`This block hash ${txCount} Transaction`);

          // Obtém as transações do bloco
          const transactions = await Promise.all(
            block.transactions.map(txHash => provider.getTransaction(txHash))
          );
          
          console.log(transactions);
        }
      }
      rl.close();
    }
  );
}

main();
