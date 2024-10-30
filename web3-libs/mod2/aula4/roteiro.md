# Aula 4: **Lendo dados de blocos com Web3.js v4.x**

## Abertura

Olá! Bem-vindo à nossa quarta aula sobre Web3.js v4. Nesta aula, vamos explorar como ler dados de blocos da blockchain, um aspecto essencial para interagir com redes descentralizadas e extrair informações valiosas. Com isso, você estará apto a monitorar e extrair dados específicos dos blocos, compreendendo o que compõe cada um e como esses dados podem ser utilizados para criar aplicações mais robustas.

### Programação:

1. Introdução aos blocos na blockchain
2. Entendendo os métodos de leitura de blocos no Web3.js
3. Extraindo dados detalhados de blocos
4. Exemplos práticos de leitura de blocos

---

## 1. Introdução aos blocos na blockchain

Blocos são componentes fundamentais da blockchain. Cada bloco contém um conjunto de transações, além de informações como:

- Hash do bloco: uma identificação única.
- Hash do bloco anterior, criando uma sequência linear.
- TimeStamp: momento de criação do bloco.
- Número do bloco: posição do bloco na cadeia.
- Dados das transações.

Esses blocos são interligados, formando uma "cadeia de blocos", onde cada bloco confirma a integridade do bloco anterior. Ao extrair e analisar dados de blocos, podemos entender o fluxo das transações, monitorar atividades e desenvolver soluções de monitoramento para aplicações Web3.

## 2. Entendendo os métodos de leitura de blocos no Web3.js

Web3.js oferece diversos métodos para acessar e ler informações de blocos diretamente da blockchain. Vamos explorar dois métodos principais:

- `web3.eth.getBlock(blockNumber)`:

  - Este método recupera informações detalhadas de um bloco específico.
  - Parâmetros:
    - `blockNumber`: o número ou identificador do bloco que desejamos ler (ex: `latest` para o bloco mais recente).
  - Retorno: dados do bloco, incluindo transações, hash, timestamp, entre outros.

- `web3.eth.getBlockNumber()`:
  - Utilizado para obter o número do último bloco (mais recente).
  - Retorno: número do bloco, que pode ser usado para acessar os dados do bloco mais recente com `getBlock`.

Exemplo básico para obter o último bloco:

```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

async function getLatestBlock() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  const latestBlock = await web3.eth.getBlock(latestBlockNumber);
  console.log(latestBlock);
}

getLatestBlock();
```

## 3. Extraindo dados detalhados de blocos

Para extrair dados específicos de um bloco, é possível usar o parâmetro `true` no método `getBlock`. Isso permite obter todas as transações contidas no bloco, facilitando a análise detalhada. Vamos entender alguns campos importantes que podemos extrair:

- `transactions`: lista das transações contidas no bloco.
- `miner`: endereço do minerador que validou o bloco.
- `gasUsed`: quantidade de gás total usado para as transações no bloco.
- `difficulty`: nível de dificuldade para minerar o bloco.

Exemplo para extrair as transações do último bloco:

```javascript
async function getBlockTransactions() {
  const latestBlock = await web3.eth.getBlock("latest", true);
  latestBlock.transactions.forEach((tx) => {
    console.log(`Transaction Hash: ${tx.hash}`);
    console.log(
      `From: ${tx.from}, To: ${tx.to}, Value: ${web3.utils.fromWei(
        tx.value,
        "ether"
      )} ETH`
    );
  });
}

getBlockTransactions();
```

Este código lê o bloco mais recente e imprime o hash, remetente, destinatário e o valor em Ether de cada transação do bloco.

## 4. Exemplos práticos de leitura de blocos

Vamos ver como monitorar novos blocos e extrair automaticamente dados de cada um usando `web3.eth.subscribe`. Esse método cria uma assinatura para eventos de novos blocos, permitindo acompanhar a cadeia em tempo real.

Exemplo de monitoramento de novos blocos:

```javascript
const subscription = web3.eth.subscribe(
  "newBlockHeaders",
  (error, blockHeader) => {
    if (!error) {
      console.log(`Novo bloco minerado: ${blockHeader.number}`);
      console.log(`Hash: ${blockHeader.hash}`);
    } else {
      console.error(error);
    }
  }
);

subscription.on("data", (blockHeader) => {
  console.log(`Bloco recebido: ${blockHeader.number}`);
});
```

Neste exemplo, assinamos o evento `newBlockHeaders` para receber notificações sempre que um novo bloco é minerado, permitindo que aplicativos Web3 fiquem atualizados em tempo real com a blockchain.

## Conclusão

Nesta aula, exploramos como ler e entender os dados de blocos na blockchain utilizando Web3.js. Analisamos métodos fundamentais como `getBlock`, `getBlockNumber` e `newBlockHeaders` para extrair dados e monitorar novas adições na blockchain. Com essas habilidades, você agora pode acessar informações detalhadas de blocos e transações, essencial para o desenvolvimento de ferramentas analíticas e de monitoramento em Web3.

## Recapitulação

1. Introdução aos blocos: Estrutura dos blocos e sua importância.
2. Métodos de leitura de blocos no Web3.js: `getBlock` e `getBlockNumber`.
3. Extraindo dados específicos: Como acessar dados detalhados de um bloco.
4. Exemplos práticos: Monitoramento de novos blocos em tempo real.

## Lição de casa

1. **Fácil**: Use `web3.eth.getBlockNumber` para exibir o número do último bloco.
2. **Médio**: Extraia o hash e o timestamp do último bloco e imprima no console.
3. **Difícil**: Crie uma função para monitorar novos blocos e exibir as informações de todas as transações contidas nos blocos recebidos em tempo real.

## Próxima aula

Na próxima aula, vamos aprender sobre **Como criar transações simples com Web3.js (envio de Ether)**. Nos vemos lá!
