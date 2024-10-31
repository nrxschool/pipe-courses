// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from 'viem';

// 2. Configure o client
export const publicClient = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

// 3. Verifique a conexão
const blockNumber = await publicClient.getBlockNumber();
console.log(`Block number ${blockNumber}`);
