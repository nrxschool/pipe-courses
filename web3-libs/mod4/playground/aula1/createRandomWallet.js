const { ethers } = require('ethers'); 

const wallet = ethers.Wallet.createRandom()
console.log('Endereço:', wallet.address);
console.log('Chave Privada:', wallet.privateKey);
