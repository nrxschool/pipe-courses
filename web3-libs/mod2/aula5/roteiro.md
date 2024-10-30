# Aula 5: **Como criar transações simples com Web3.js (envio de Ether)**

## Abertura

Olá! Bem-vindo à quinta aula do curso sobre Web3.js v4.x. Hoje, vamos abordar a criação de transações simples na blockchain Ethereum, focando no envio de Ether de uma conta para outra. Aprender a realizar transações é um passo fundamental para quem deseja interagir com a blockchain de forma prática, e nesta aula você ganhará confiança para começar a trabalhar com transferências de ativos.

### Programação:

1. Entendendo transações na blockchain
2. Preparação para envio de transações com Web3.js
3. Passo a passo para criar uma transação simples
4. Executando e verificando a transação

---

## 1. Entendendo transações na blockchain

Uma transação na blockchain é uma ação registrada e validada por mineradores (ou validadores) que atualiza o estado da blockchain. No Ethereum, uma transação envolve a transferência de Ether de uma conta para outra, podendo conter informações como:

- **De (from)**: Endereço da conta de origem.
- **Para (to)**: Endereço da conta de destino.
- **Valor (value)**: Quantidade de Ether a ser transferida (em wei, a menor unidade de Ether).
- **Taxa de gás (gas fee)**: Quantidade de gás que será paga aos mineradores para processar a transação.
- **Assinatura (signature)**: Assinatura criptográfica que confirma a origem da transação.

Esse processo é totalmente descentralizado, o que significa que a transação precisa ser assinada pela conta de origem para garantir sua autenticidade e autorização.

## 2. Preparação para envio de transações com Web3.js

Para criar e enviar uma transação simples no Ethereum usando Web3.js, vamos precisar de algumas informações e configurações iniciais:

- **Conta de origem e chave privada**: A chave privada é necessária para assinar a transação.
- **Conta de destino**: Endereço para onde o Ether será enviado.
- **Gás e Gás Price**: Valor de gás necessário para a execução da transação e o preço do gás a ser pago por unidade.

⚠️ **Atenção**: Nunca compartilhe sua chave privada e sempre mantenha-a protegida. Neste exemplo, vamos usá-la apenas para fins educacionais.

Instale o Web3.js:

```bash
npm install web3
```

Configure sua conexão com a blockchain:

```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
```

## 3. Passo a passo para criar uma transação simples

Agora que temos as configurações iniciais, vamos montar uma transação de exemplo para enviar uma pequena quantidade de Ether.

1. **Defina as variáveis de transação**:

   - Endereço de origem (de)
   - Endereço de destino (para)
   - Valor em wei
   - Gas e Gas Price

2. **Crie e assine a transação**:
   - Use a chave privada da conta de origem para assinar a transação.
3. **Envie a transação**:
   - Utilize `web3.eth.sendSignedTransaction` para enviar a transação assinada.

Exemplo de código:

```javascript
const fromAddress = "0xSuaContaDeOrigem";
const toAddress = "0xContaDeDestino";
const privateKey = "0xSuaChavePrivada"; // Mantenha esta chave protegida

async function sendEther() {
  const tx = {
    from: fromAddress,
    to: toAddress,
    value: web3.utils.toWei("0.01", "ether"), // Valor a ser enviado
    gas: 21000,
    gasPrice: await web3.eth.getGasPrice(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  console.log(`Transação enviada! Hash: ${receipt.transactionHash}`);
}

sendEther();
```

## 4. Executando e verificando a transação

Após o envio da transação, podemos monitorá-la na blockchain e confirmar se foi bem-sucedida. O método `sendSignedTransaction` retorna um recibo (`receipt`) que contém informações como:

- **transactionHash**: Identificação única da transação.
- **status**: Indica se a transação foi confirmada.
- **blockHash** e **blockNumber**: Dados do bloco onde a transação foi registrada.

Exemplo de verificação do recibo:

```javascript
const transactionHash = "HASH_DA_TRANSACAO";

web3.eth.getTransactionReceipt(transactionHash).then((receipt) => {
  console.log(receipt);
  if (receipt && receipt.status) {
    console.log("Transação confirmada com sucesso!");
  } else {
    console.log("Transação falhou.");
  }
});
```

Com essa verificação, garantimos que a transação foi minerada e confirmada na blockchain.

## Conclusão

Hoje aprendemos a criar e enviar transações simples usando Web3.js. Compreendemos os elementos fundamentais de uma transação, configuramos uma transação em Web3.js, e a assinamos e enviamos com segurança. Este conhecimento permite que você envie Ether programaticamente, uma habilidade essencial para criar aplicações descentralizadas.

## Recapitulação

1. **Entendendo transações**: Estrutura básica e campos importantes.
2. **Configuração inicial**: Conexão com a blockchain e definição das contas.
3. **Passo a passo da transação**: Definindo, assinando e enviando.
4. **Verificação de sucesso**: Confirmando a execução da transação.

## Lição de casa

1. **Fácil**: Configure uma transação simples e exiba o hash no console.
2. **Médio**: Modifique o código para enviar um valor de Ether configurável por entrada de usuário.
3. **Difícil**: Crie uma função que monitore o saldo de uma conta e envie automaticamente Ether se o saldo cair abaixo de um valor específico.

## Próxima aula

Na próxima aula, vamos aprender sobre **ABIs e como eles são usados para se conectar a contratos inteligentes no Ethereum com Web3.js**. Nos vemos lá!
