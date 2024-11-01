// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from 'viem';

// 2. Configure o client
export const client = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

const viemClient = client;

viemClient.getBlock("earliest").then((block) => {
  console.log("================================================");
  console.log("EARLIEST BLOCK");
  console.log("================================================");
  console.log(block);
});
viemClient.getBlock("latest").then((block) => {
  console.log("================================================");
  console.log("LATEST BLOCK");
  console.log("================================================");
  console.log(block);
});
viemClient.getBlock("pending").then((block) => {
  console.log("================================================");
  console.log("PENDING BLOCK");
  console.log("================================================");
  console.log(block);
});
viemClient.getBlock("finalized").then((block) => {
  console.log("================================================");
  console.log("FINALIZED BLOCK");
  console.log("================================================");
  console.log(block);
});
viemClient.getBlock("safe").then((block) => {
  console.log("================================================");
  console.log("SAFE BLOCK");
  console.log("================================================");
  console.log(block);
});
