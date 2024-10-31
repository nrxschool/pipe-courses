import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const transport = http(RPC_URL);

const publicClient = createPublicClient({
  transport,
  chain: anvil,
});

const walletClient = createWalletClient({
  transport,
  chain: anvil,
});

const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = privateKeyToAccount(PRIVATE_KEY);

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const recipient = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const amount = parseEther("10");

async function transfer(address, amount) {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi,
    functionName: 'transfer',
    args: [address, amount],
    account,
  });

  const hash = await walletClient.writeContract(request);

  console.log("Transação enviada com hash:", hash);
}

transfer(recipient, amount);
