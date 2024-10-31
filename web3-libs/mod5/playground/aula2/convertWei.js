import { createPublicClient, http, formatUnits } from 'viem';
import readline from "readline";

// 2. Configure o client
export const client = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

// 3. Obtenha o endereço da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o endereço da conta: ", async (address) => {
  console.log("Endereço fornecido:", address);
  // Verifica se o endereço é válido
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    console.error("Endereço inválido. Certifique-se de que o endereço está no formato correto.");
    rl.close();
    return;
  }

  try {
    const balance = await client.getBalance({ address });
    console.log("Saldo em wei:", balance);
    const etherBalance = formatUnits(balance, 18);
    console.log("Saldo em ether:", etherBalance);
  } catch (error) {
    console.error("Erro ao consultar o saldo:", error);
  }
  rl.close();
});
