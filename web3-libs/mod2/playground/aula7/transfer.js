import { Web3 } from "web3";
import abi from "abi";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY)[0];

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Cria uma instância do contrato
const contract = new web3.eth.Contract(abi, contractAddress);

const recipient = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const amount = web3.utils.toWei("10", "ether");

async function transfer(address, amount) {
  const calldata = contract.methods.transfer(address, amount).encodeABI();
  console.log("calldata:", calldata);

  const nonce = await web3.eth.getTransactionCount(account.address);

  const gasPrice = await web3.eth.getGasPrice();

  const gasLimit = await web3.eth.estimateGas({
    to: contractAddress,
    from: account.address,
    data: calldata,
  });

  const transaction = {
    to: contractAddress,
    gas: gasLimit,
    gasPrice: gasPrice,
    nonce: nonce,
    data: calldata,
  };

  const signedTransaction = await web3.eth.accounts.signTransaction(
    transaction,
    account.privateKey
  );

  const txHash = await web3.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );

  console.log("Transação enviada com hash:", txHash);
}

transfer(recipient, amount);
