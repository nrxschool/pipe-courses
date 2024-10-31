import { createPublicClient, createWalletClient, http, parseEther, formatEther } from "viem";
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

// Configuração do signer
const ALICE_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const BOB_PRIVATE_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

const ALICE_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const BOB_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const EVE_ADDRESS = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const aliceAccount = privateKeyToAccount(ALICE_PRIVATE_KEY);
const bobAccount = privateKeyToAccount(BOB_PRIVATE_KEY);

async function main() {
  // Alice approves 10 tokens for Bob
  const { request: approveRequest } = await publicClient.simulateContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'approve',
    args: [BOB_ADDRESS, parseEther("10")],
    account: aliceAccount,
  });

  await walletClient.writeContract(approveRequest);
  console.log("Alice approved 10 tokens for Bob");

  // Check the balance and allowance of Alice, Bob, and Eve
  const aliceBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [ALICE_ADDRESS],
  });

  const bobBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [BOB_ADDRESS],
  });

  const eveBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [EVE_ADDRESS],
  });

  const allowance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'allowance',
    args: [ALICE_ADDRESS, BOB_ADDRESS],
  });

  console.table({
    "Alice's balance": formatEther(aliceBalance),
    "Bob's balance": formatEther(bobBalance),
    "Eve's balance": formatEther(eveBalance),
    "Allowance for Bob from Alice": formatEther(allowance)
  });

  // Bob signs the tx sending 1 token from Alice to Eve
  const { request: transferFromRequest } = await publicClient.simulateContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'transferFrom',
    args: [ALICE_ADDRESS, EVE_ADDRESS, parseEther("1")],
    account: bobAccount,
  });

  await walletClient.writeContract(transferFromRequest);
  console.log("Bob transferred 1 token from Alice to Eve");

  // Check the balance and allowance of Alice, Bob, and Eve again
  const newAliceBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [ALICE_ADDRESS],
  });

  const newBobBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [BOB_ADDRESS],
  });

  const newEveBalance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [EVE_ADDRESS],
  });

  const newAllowance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'allowance',
    args: [ALICE_ADDRESS, BOB_ADDRESS],
  });

  console.table({
    "Alice's new balance": formatEther(newAliceBalance),
    "Bob's new balance": formatEther(newBobBalance),
    "Eve's new balance": formatEther(newEveBalance),
    "New allowance for Bob from Alice": formatEther(newAllowance)
  });
}

main().catch(console.error);
