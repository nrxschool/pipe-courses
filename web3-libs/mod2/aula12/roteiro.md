# Aula 12: **Como criar transações complexas (envio de Struct, Enum e Array) com Web3.js**

## Abertura

Olá! Bem-vindo à nossa décima segunda aula sobre Web3.js v4.x. Nesta aula, vamos explorar como criar transações complexas enviando dados mais estruturados para contratos inteligentes, incluindo **Structs**, **Enums** e **Arrays**. Este conhecimento permitirá que você desenvolva aplicações mais interativas e sofisticadas, enviando dados ricos e organizados para a blockchain de maneira eficiente.

### Programação:

1. Preparando o contrato para receber Structs, Enums e Arrays
2. Criando e enviando transações com Structs
3. Lidando com Enums em transações
4. Envio de Arrays e Arrays complexos

---

## 1. Preparando o contrato para receber Structs, Enums e Arrays

Para que possamos enviar dados complexos, precisamos garantir que o contrato inteligente em Solidity está preparado para receber esses tipos de dados. Vamos ver um exemplo de contrato que aceita Structs, Enums e Arrays em uma única função.

### Exemplo de contrato Solidity

```solidity
pragma solidity ^0.8.0;

contract ComplexContract {

    enum OrderStatus { Pending, Shipped, Delivered }

    struct Order {
        uint id;
        string description;
        uint256 amount;
        OrderStatus status;
    }

    Order[] public orders;

    function placeOrder(uint id, string memory description, uint256 amount, OrderStatus status, address[] memory recipients) public {
        Order memory newOrder = Order(id, description, amount, status);
        orders.push(newOrder);

        // Realiza alguma operação com recipients
        for (uint i = 0; i < recipients.length; i++) {
            // Log ou operação com recipients[i]
        }
    }
}
```

Neste exemplo:

- A função `placeOrder` recebe parâmetros do tipo `uint`, `string`, `uint256`, `OrderStatus` (enum) e `address[]` (array).
- Os dados são usados para criar um novo `Order`, que é armazenado em um array de pedidos (`orders`).

## 2. Criando e enviando transações com Structs

Para enviar dados para um `struct`, você precisa passar cada atributo do `struct` como um parâmetro na função.

### Exemplo de envio com Web3.js

Primeiro, defina o ABI e o endereço do contrato no Web3.js:

```javascript
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const abi = [...]; // ABI do contrato com a função placeOrder
const contractAddress = '0xEndereçoDoContrato';
const contract = new web3.eth.Contract(abi, contractAddress);
```

Para enviar um `struct` (neste caso, cada parâmetro separadamente), use o seguinte código:

```javascript
const account = "0xSeuEndereco";
const privateKey = "0xSuaChavePrivada"; // Use com segurança

async function placeOrder() {
  const orderId = 1;
  const description = "Order Description";
  const amount = web3.utils.toWei("0.1", "ether");
  const status = 1; // Status de 'Shipped' no enum
  const recipients = ["0xEndereco1", "0xEndereco2"];

  const tx = contract.methods.placeOrder(
    orderId,
    description,
    amount,
    status,
    recipients
  );

  const gas = await tx.estimateGas({ from: account });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(account);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data,
      gas,
      gasPrice,
      nonce,
      chainId: 1,
    },
    privateKey
  );

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("Transação enviada! Hash:", receipt.transactionHash);
}

placeOrder();
```

## 3. Lidando com Enums em transações

Para enviar um valor de `enum`, usamos o índice que representa o valor do `enum`. Em Solidity, enums começam no índice 0. No exemplo anterior:

- `0` representa `Pending`
- `1` representa `Shipped`
- `2` representa `Delivered`

Ao enviar o valor `status = 1` no exemplo, estamos especificando que o pedido está no status `Shipped`.

## 4. Envio de Arrays e Arrays complexos

Arrays podem ser enviados diretamente, contanto que o contrato Solidity esteja configurado para recebê-los como `memory`. No exemplo `placeOrder`, passamos um array de endereços para o parâmetro `recipients`.

### Enviando arrays aninhados

Para enviar arrays mais complexos, como arrays de structs ou arrays multidimensionais, a função do contrato precisa aceitar esses dados em uma estrutura compatível.

Exemplo de uma função Solidity para aceitar um array de `Order` structs:

```solidity
function placeMultipleOrders(Order[] memory _orders) public {
    for (uint i = 0; i < _orders.length; i++) {
        orders.push(_orders[i]);
    }
}
```

Para enviar dados de `Order[]` em Web3.js, você precisa formatar cada pedido de acordo com o ABI do contrato e enviá-los em um array.

### Exemplo de envio de array aninhado com Web3.js

```javascript
async function placeMultipleOrders() {
  const orders = [
    {
      id: 1,
      description: "Order 1",
      amount: web3.utils.toWei("0.1", "ether"),
      status: 0,
    },
    {
      id: 2,
      description: "Order 2",
      amount: web3.utils.toWei("0.2", "ether"),
      status: 1,
    },
  ];

  const tx = contract.methods.placeMultipleOrders(orders);

  const gas = await tx.estimateGas({ from: account });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(account);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data,
      gas,
      gasPrice,
      nonce,
      chainId: 1,
    },
    privateKey
  );

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("Transação enviada! Hash:", receipt.transactionHash);
}

placeMultipleOrders();
```

Neste exemplo:

- Enviamos um array de objetos `orders` como parâmetro para a função `placeMultipleOrders`, cada um contendo os dados necessários para o `struct Order`.

## Conclusão

Hoje aprendemos a enviar transações complexas para contratos inteligentes usando Web3.js. Exploramos como manipular e enviar dados estruturados como Structs, Enums e Arrays, permitindo que aplicações descentralizadas transmitam dados ricos e organizados para a blockchain. Com isso, você pode criar interações avançadas e dinâmicas entre os usuários e os contratos.

## Recapitulação

1. **Preparação do contrato**: Como configurar o contrato para receber Structs, Enums e Arrays.
2. **Envio de Structs**: Passo a passo para enviar cada atributo do struct.
3. **Envio de Enums**: Como mapear e enviar valores de Enum.
4. **Envio de Arrays**: Enviando listas de dados e arrays multidimensionais.

## Lição de casa

1. **Fácil**: Crie uma função de contrato que aceite um `struct` com três campos e envie uma transação para ele.
2. **Médio**: Crie uma função em Solidity que receba um `enum` e uma string, e use Web3.js para enviar uma transação que altere o valor do enum.
3. **Difícil**: Envie um array de `structs` para um contrato, onde cada struct possui pelo menos três campos diferentes.

## Próxima aula

Na próxima aula, vamos iniciar o Módulo 3, onde exploraremos o uso do **Web3.py para realizar operações similares na blockchain**. Nos vemos lá!
