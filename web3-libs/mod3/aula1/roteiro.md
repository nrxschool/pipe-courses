# Aula 3: Lendo Dados de Transações

## Abertura

Bem-vindo à terceira aula sobre a biblioteca **Web3.js**. Hoje, vamos aprender a extrair informações detalhadas de transações na blockchain. Entender os dados das transações é essencial para monitorar, validar e auditar interações, além de ser uma base importante para desenvolvimento e análise de smart contracts. Nesta aula, vamos explorar os métodos que a **Web3.js** nos oferece para consultar e analisar transações específicas.

### Programa da aula:

1. Obtendo uma transação pelo hash
2. Analisando os dados da transação
3. Lendo o recibo de uma transação
4. Analisando logs no recibo

---

## 1. Obtendo uma Transação pelo Hash

O primeiro passo para ler uma transação é saber como acessá-la através de seu **hash**, que é um identificador único gerado após cada transação. Vamos usar o método `getTransaction`.

```javascript
// Exemplo de código para obter uma transação
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

async function getTransaction(txHash) {
  const transaction = await web3.eth.getTransaction(txHash);
  console.log(transaction);
}

getTransaction("0xTransactionHash");
```

### Dados Retornados

O método `getTransaction` retorna vários dados importantes, como:

- **blockHash**: hash do bloco onde a transação foi registrada.
- **from** e **to**: endereços do remetente e destinatário.
- **value**: valor enviado na transação (em wei).
- **gasPrice**: preço do gás da transação.
- **input**: dados adicionais, como calldata (para chamadas de contratos).

---

## 2. Analisando os Dados da Transação

Depois de acessar uma transação, podemos examinar cada campo. Esses dados são valiosos para compreender a ação realizada e o custo associado.

Exemplo de dados comuns em uma transação:

```javascript
{
    blockHash: "0x123abc...",
    blockNumber: 12345678,
    from: "0xFromAddress",
    to: "0xToAddress",
    gas: 21000,
    gasPrice: "10000000000", // Em wei
    hash: "0xTransactionHash",
    input: "0x...",
    nonce: 1,
    transactionIndex: 0,
    value: "1000000000000000000" // Em wei
}
```

### Explicando Campos Específicos

- **input**: No caso de uma transação para um contrato, contém o calldata.
- **nonce**: número que identifica a ordem da transação do remetente.
- **transactionIndex**: posição da transação no bloco.

---

## 3. Lendo o Recibo de uma Transação

Um recibo de transação contém informações detalhadas sobre o que aconteceu após a execução da transação. O método `getTransactionReceipt` fornece detalhes como status e consumo total de gás.

```javascript
async function getTransactionReceipt(txHash) {
  const receipt = await web3.eth.getTransactionReceipt(txHash);
  console.log(receipt);
}

getTransactionReceipt("0xTransactionHash");
```

### Dados do Recibo

Campos importantes no recibo:

- **status**: indica se a transação foi bem-sucedida (`1`) ou falhou (`0`).
- **gasUsed**: gás efetivamente consumido na execução.
- **contractAddress**: endereço do contrato, se a transação criou um contrato.
- **logs**: lista de eventos gerados durante a execução da transação.

---

## 4. Analisando Logs no Recibo

Os **logs** são eventos emitidos por contratos durante a execução de uma transação. Eles são úteis para entender interações específicas e dados gerados pelos contratos.

Exemplo de leitura de logs:

```javascript
async function readTransactionLogs(txHash) {
  const receipt = await web3.eth.getTransactionReceipt(txHash);
  receipt.logs.forEach((log) => {
    console.log("Log Address:", log.address);
    console.log("Log Topics:", log.topics);
    console.log("Log Data:", log.data);
  });
}

readTransactionLogs("0xTransactionHash");
```

### Estrutura dos Logs

- **address**: contrato que gerou o log.
- **topics**: identificadores dos eventos, ajudam a indexar o tipo de evento.
- **data**: informações associadas ao evento.

---

## Conclusão

Hoje, aprendemos como obter e analisar transações na blockchain usando **Web3.js**. Desde o acesso básico com o `getTransaction` até o uso de `getTransactionReceipt` para analisar o recibo e entender os eventos gerados, cobrimos o essencial para explorar e validar as transações com profundidade.

---

## Recapitulação

- Obtenção de uma transação via hash com `getTransaction`.
- Análise detalhada dos campos de uma transação.
- Leitura do recibo da transação com `getTransactionReceipt`.
- Análise dos logs e eventos gerados na transação.

---

## Lição de casa

- Obtenha e analise uma transação real do Ethereum usando `getTransaction` e `getTransactionReceipt`.
- Liste todos os logs de uma transação que envolva um contrato.

---

## Próxima Aula

Na próxima aula, aprenderemos a ler dados de blocos, entendendo sua estrutura e como acessá-los.
