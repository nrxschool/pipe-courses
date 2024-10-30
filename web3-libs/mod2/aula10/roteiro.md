# Aula 10: Como ler dados complexos do contrato (Struct, Enum e Array) com Web3.js

## Abertura

Olá! Bem-vindo à décima aula sobre Web3.js v4. Hoje, vamos explorar a leitura de dados mais complexos em contratos inteligentes, incluindo **Structs**, **Enums** e **Arrays**. Com esse conhecimento, você poderá acessar e manipular dados organizados de forma mais estruturada, permitindo desenvolver interações avançadas com contratos na blockchain.

### Programação:

1. Estrutura de dados complexos em contratos inteligentes
2. Acessando Structs com Web3.js
3. Lidando com Enums no Web3.js
4. Leitura de Arrays e arrays multidimensionais

---

## 1. Estrutura de dados complexos em contratos inteligentes

No desenvolvimento de contratos inteligentes, tipos de dados complexos como **Structs**, **Enums** e **Arrays** ajudam a organizar informações. Esses elementos são úteis para criar contratos mais robustos e intuitivos. Vamos entender cada um:

- **Structs**: Estruturas que agrupam diferentes tipos de dados em um só tipo, permitindo criar objetos com múltiplos atributos.
- **Enums**: Listas de valores predefinidos, usadas para definir estados ou categorias em um contrato.
- **Arrays**: Coleções de dados do mesmo tipo, podendo ser unidimensionais ou multidimensionais.

Esses tipos complexos são amplamente utilizados para organizar dados de usuários, status de transações e outras informações que precisam de uma estrutura mais rica.

## 2. Acessando Structs com Web3.js

No Solidity, um `struct` agrupa vários atributos em uma única unidade. Abaixo está um exemplo de um `struct` que representa um produto:

```solidity
struct Product {
    string name;
    uint price;
    address owner;
}

Product[] public products;
```

Para ler dados desse `struct` em Web3.js, o contrato deve possuir uma função pública que retorne o struct ou os valores específicos que queremos acessar.

### Exemplo de função de leitura no contrato Solidity

```solidity
function getProduct(uint index) public view returns (string memory, uint, address) {
    Product memory product = products[index];
    return (product.name, product.price, product.owner);
}
```

### Leitura de dados do `struct` com Web3.js

Com Web3.js, podemos chamar essa função para obter os detalhes de um `Product`:

```javascript
const productIndex = 0; // Índice do produto que queremos acessar
const abi = [...]; // ABI do contrato com a função getProduct
const contractAddress = '0xEndereçoDoContrato';
const contract = new web3.eth.Contract(abi, contractAddress);

async function getProductDetails(index) {
  const product = await contract.methods.getProduct(index).call();
  console.log(`Nome: ${product[0]}, Preço: ${web3.utils.fromWei(product[1], 'ether')} ETH, Dono: ${product[2]}`);
}

getProductDetails(productIndex);
```

Neste exemplo:

- Chamamos `getProduct` e usamos `.call()` para obter os detalhes sem enviar uma transação.
- O array `product` contém os dados do `struct`, que são exibidos no console.

## 3. Lidando com Enums no Web3.js

Um `enum` em Solidity define estados possíveis. Exemplo de um `enum` simples:

```solidity
enum Status { Pending, Shipped, Delivered }

Status public orderStatus;
```

Para acessar o valor de um `enum`, geralmente criamos uma função pública no contrato que retorna o índice do estado atual:

```solidity
function getOrderStatus() public view returns (Status) {
    return orderStatus;
}
```

### Leitura de `enum` com Web3.js

No JavaScript, o valor retornado será numérico (0 para `Pending`, 1 para `Shipped`, 2 para `Delivered`), então precisamos mapear esses valores para os estados correspondentes:

```javascript
async function getOrderStatus() {
  const status = await contract.methods.getOrderStatus().call();
  const statusMap = ["Pending", "Shipped", "Delivered"];
  console.log(`Status do pedido: ${statusMap[status]}`);
}

getOrderStatus();
```

Aqui, o `statusMap` converte o valor numérico em uma string representando o estado do pedido.

## 4. Leitura de Arrays e Arrays Multidimensionais

**Arrays** são comumente utilizados para armazenar listas, como uma lista de endereços de usuários ou IDs de produtos. Em Solidity, podemos ter arrays fixos, dinâmicos e até mesmo arrays multidimensionais.

### Exemplo de Array no contrato Solidity

```solidity
address[] public users;

function addUser(address user) public {
    users.push(user);
}

function getUsers() public view returns (address[] memory) {
    return users;
}
```

### Leitura de Arrays com Web3.js

Para acessar um array, basta chamar a função que retorna o array completo ou acessar cada índice individualmente.

```javascript
async function getUsers() {
  const users = await contract.methods.getUsers().call();
  console.log("Lista de usuários:");
  users.forEach((user, index) => {
    console.log(`Usuário ${index + 1}: ${user}`);
  });
}

getUsers();
```

### Arrays Multidimensionais

Em Solidity, um array multidimensional é um array que contém outros arrays. Um exemplo seria uma matriz de transações onde cada linha representa uma lista de transações de um usuário:

```solidity
uint[][] public transactions;

function addTransaction(uint userIndex, uint amount) public {
    transactions[userIndex].push(amount);
}

function getUserTransactions(uint userIndex) public view returns (uint[] memory) {
    return transactions[userIndex];
}
```

No Web3.js, podemos chamar `getUserTransactions` para acessar as transações de um usuário específico.

```javascript
async function getUserTransactions(userIndex) {
  const transactions = await contract.methods
    .getUserTransactions(userIndex)
    .call();
  console.log(`Transações do usuário ${userIndex + 1}:`, transactions);
}

getUserTransactions(0);
```

## Conclusão

Hoje aprendemos como acessar e ler dados complexos de contratos inteligentes com Web3.js, incluindo Structs, Enums e Arrays. Com essas técnicas, você pode manipular e interpretar dados de contratos mais complexos, uma habilidade essencial para desenvolver aplicações robustas e interativas em Web3.

## Recapitulação

1. **Structs**: Estruturas de dados compostas e como acessá-las.
2. **Enums**: Listas de estados ou categorias e como interpretá-las.
3. **Arrays**: Listas de dados e como manipulá-las, incluindo arrays multidimensionais.

## Lição de casa

1. **Fácil**: Crie uma função em Web3.js que leia e exiba dados de um `struct` com pelo menos três atributos.
2. **Médio**: Mapeie um `enum` e use Web3.js para exibir o estado atual em uma string legível.
3. **Difícil**: Trabalhe com um array multidimensional e crie uma função que exiba todas as transações de cada usuário.

## Próxima aula

Na próxima aula, vamos aprender a criar **transações complexas com Web3.js, incluindo envio de ERC20 e outros tipos de dados estruturados**. Nos vemos lá!
