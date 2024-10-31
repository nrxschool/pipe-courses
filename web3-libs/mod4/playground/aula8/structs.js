import { ethers } from "ethers";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Cria uma instância do contrato
const contract = new ethers.Contract(contractAddress, abi, wallet);

async function addPeople(name, age, gender) {
  const person = {
    name: name,
    age: age,
    gender: gender,
  };

  await contract.pushPeople(person);
}

const male = 0;
const female = 1;

addPeople("Carlos", 32, male);
