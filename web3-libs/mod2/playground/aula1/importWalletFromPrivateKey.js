import { Web3 } from "web3";

const web3 = new Web3();

// Create Account
const PRIVATE_KEY = "0xb762c5177d93ae67873060b655b652eecddca5085d918c2de4ca23b1e6be4812";
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY);
console.log(account);

// "0x6e081356826f6bb74436f8DeA67a366dA5671861"
// "0x09f174A448712dA0af6Cfc3F9B136635eE8E50e4"
