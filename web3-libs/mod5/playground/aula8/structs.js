import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { foundry } from 'viem/chains';
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const transport = http(RPC_URL);

const publicClient = createPublicClient({
  chain: foundry,
  transport
});

const walletClient = createWalletClient({
  chain: foundry,
  transport
});

const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = privateKeyToAccount(PRIVATE_KEY);

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function addPeople(name, age, gender) {
  const person = {
    name: name,
    age: age,
    gender: gender,
  };

  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: abi,
    functionName: 'pushPeople',
    args: [person],
    account
  });

  await walletClient.writeContract(request);
}

const male = 0;
const female = 1;

addPeople("Carlos", 32, male);
