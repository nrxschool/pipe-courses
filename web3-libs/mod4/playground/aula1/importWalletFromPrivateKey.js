import { ethers } from "ethers";

// Create Account
const PRIVATE_KEY = "0xb762c5177d93ae67873060b655b652eecddca5085d918c2de4ca23b1e6be4812";
const wallet = new ethers.Wallet(PRIVATE_KEY);
console.log(wallet.address);