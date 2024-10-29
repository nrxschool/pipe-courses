import { Web3 } from "web3";

const web3 = new Web3();

// Create Account
PRIVATE_KEY = "";
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY);
console.log(account);
