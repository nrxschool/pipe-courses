import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// Configuração do provider para leitura (cliente público)
const publicClient = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

// Configuração do provider e do signer para transações (cliente com carteira)
const PRIVATE_KEY =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const walletClient = createWalletClient({
  transport: http('http://127.0.0.1:8545'),
});
const account = privateKeyToAccount(PRIVATE_KEY);

// Função para enviar uma transação usando o cliente da carteira
async function sendTransaction(account) {
  try {
    const toAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
    const valueInEther = '1';

    // Envia a transação
    const hash = await walletClient.sendTransaction({
      account,
      to: toAddress,
      value: parseEther(valueInEther),
    });

    console.log('Transação enviada com sucesso! Hash:', hash);
  } catch (error) {
    console.error('Erro ao enviar a transação:', error);
  }
}

// Chama a função para enviar a transação
sendTransaction(account);
