const { ethers } = require('ethers'); 
readline = require('readline');

const wallet = ethers.Wallet.createRandom()
console.log('Endereço:', wallet.address);
console.log('Chave Privada:', wallet.privateKey);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


async function encryptPrivateKey() {
    const password = await new Promise((resolve) => {
        rl.question("Digite sua senha para encriptar: ", resolve);
    });
    const encryptedJson = await wallet.encrypt(password); // Sem alterações
    console.log("Keystore Encriptado:", encryptedJson);

    // Chama a função para decriptar
    decryptKeystore(encryptedJson);
}

// Função para pedir a senha e decriptar a chave privada
async function decryptKeystore(encryptedJson) {
    const password = await new Promise((resolve) => {
        rl.question("Digite sua senha para decriptar: ", resolve);
    });
    try {
        const decryptedWallet = await ethers.Wallet.fromEncryptedJson(encryptedJson, password); // Atualizado para fromEncryptedJson
        console.log("Conta Decriptada:", decryptedWallet);
    } catch (error) {
        console.log("Erro ao decriptar a chave:", error.message);
    }
}


// Start the process
encryptPrivateKey();