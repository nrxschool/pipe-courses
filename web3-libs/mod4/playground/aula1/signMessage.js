const { ethers } = require('ethers');
const readline = require('readline');

const wallet = ethers.Wallet.createRandom();
console.log('Endereço:', wallet.address);
console.log('Chave Privada:', wallet.privateKey);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function signMessage() {
    // Substituir prompt por readline
    rl.question("Digite a mensagem para assinar: ", async (message) => {
        try {
            // Signing the message
            const sig = await wallet.signMessage(message);

            // Validating the signed message
            const signerAddress = ethers.verifyMessage(message, sig);
            console.log('Endereço do Signatário:', signerAddress);
            console.log('Assinatura:', sig);

        } catch (error) {
            console.error("Erro:", error);
        } finally {
            // Fechar a interface readline
            rl.close();
        }
    });
}

signMessage();
