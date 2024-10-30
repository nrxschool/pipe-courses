# Aula 6: **O que são ABIs e como utilizá-los em Web3.js**

## Abertura

Olá! Bem-vindo à nossa sétima aula sobre Web3.js v4. Nesta aula, vamos abordar um componente essencial para a interação com contratos inteligentes na blockchain: os ABIs (Application Binary Interface). Compreender o que são ABIs e como utilizá-los é crucial para qualquer desenvolvedor que queira interagir com contratos na blockchain de forma programática e eficiente.

### Programação:

1. O que é um ABI e por que ele é importante
2. Estrutura de um ABI
3. Como obter e interpretar um ABI
4. Utilizando ABIs em Web3.js para acessar contratos

---

## 1. O que é um ABI e por que ele é importante

**ABI (Application Binary Interface)** é uma especificação que permite a comunicação entre contratos inteligentes e outras aplicações na blockchain Ethereum. Em termos simples, o ABI é uma “ponte” que define como uma aplicação externa pode interagir com um contrato inteligente, descrevendo as funções e os eventos que o contrato oferece.

### Importância dos ABIs

- **Interface de Comunicação**: O ABI define como os dados devem ser estruturados e codificados, permitindo que os métodos e eventos de um contrato inteligente sejam chamados de fora da blockchain.
- **Independência da Linguagem**: O ABI abstrai a complexidade de um contrato inteligente, permitindo que desenvolvedores o utilizem em várias linguagens de programação, como JavaScript (Web3.js), Python (Web3.py), entre outras.
- **Interoperabilidade**: Com o ABI, diferentes aplicações e bibliotecas podem interagir com contratos inteligentes de maneira uniforme.

Em resumo, o ABI atua como um “guia” que mapeia a estrutura do contrato, permitindo que chamadas de funções e leitura de dados sejam feitas com precisão.

## 2. Estrutura de um ABI

O ABI é composto de uma lista de objetos JSON, onde cada objeto representa um **método** ou **evento** do contrato. Os principais componentes de cada entrada de um ABI incluem:

- **name**: Nome da função ou evento.
- **type**: Tipo de entrada, que pode ser "function" para funções e "event" para eventos.
- **inputs**: Lista de parâmetros de entrada, contendo o nome e o tipo de cada parâmetro.
- **outputs**: Lista de parâmetros de saída (usado em funções que retornam valores).
- **stateMutability**: Indica se a função altera o estado da blockchain (ex: `view`, `pure`, `nonpayable`, `payable`).

### Exemplo de um ABI Simples

```json
[
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [{ "name": "owner", "type": "address" }],
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      { "name": "to", "type": "address" },
      { "name": "value", "type": "uint256" }
    ],
    "outputs": [{ "name": "success", "type": "bool" }],
    "stateMutability": "nonpayable"
  }
]
```

Neste exemplo:

- A função `balanceOf` é uma função de leitura (estado `view`) que recebe um endereço e retorna o saldo (`balance`).
- A função `transfer` permite a transferência de tokens e retorna um valor booleano (`success`) indicando o sucesso da operação.

## 3. Como obter e interpretar um ABI

Os ABIs geralmente são gerados automaticamente durante a compilação do contrato. Em contratos públicos, como aqueles verificados no **Etherscan**, o ABI pode ser obtido diretamente na página do contrato.

### Passos para obter um ABI:

1. Acesse o contrato inteligente em um explorador como Etherscan.
2. Vá até a seção **Contract**.
3. Clique em **Contract ABI** e copie o conteúdo.

Esse ABI pode então ser utilizado diretamente no Web3.js para interagir com o contrato.

## 4. Utilizando ABIs em Web3.js para acessar contratos

Agora que entendemos o que é um ABI e como ele é estruturado, vamos usá-lo no Web3.js para criar uma instância de contrato e interagir com ele. Para isso, precisamos do **endereço do contrato** e do **ABI**.

### Exemplo: Conectando a um Contrato com Web3.js

Suponha que queremos interagir com um contrato de token e usar o método `balanceOf` para verificar o saldo de uma conta.

```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// ABI do contrato
const abi = [
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ name: "balance", type: "uint256" }],
    stateMutability: "view",
  },
];

// Endereço do contrato
const contractAddress = "0xEndereçoDoContrato";

// Cria uma instância do contrato
const contract = new web3.eth.Contract(abi, contractAddress);

// Função para verificar o saldo de uma conta
async function getBalance(address) {
  const balance = await contract.methods.balanceOf(address).call();
  console.log(
    `O saldo da conta ${address} é: ${web3.utils.fromWei(
      balance,
      "ether"
    )} tokens`
  );
}

// Chamando a função para obter o saldo
getBalance("0xEndereçoDaConta");
```

### Explicação do Código

- Criamos uma instância do contrato com `new web3.eth.Contract`, passando o ABI e o endereço do contrato.
- Utilizamos `contract.methods.balanceOf(address).call()` para invocar o método `balanceOf` e ler o saldo de um endereço.
- O saldo é exibido no console, já convertido para Ether usando `web3.utils.fromWei` para uma apresentação mais amigável.

Essa abordagem permite que você chame outras funções ou eventos definidos no ABI, fornecendo uma maneira flexível de interagir com contratos.

## Conclusão

Hoje, aprendemos sobre o que é um ABI e como ele serve como uma interface entre contratos inteligentes e aplicações externas. Entendemos a estrutura básica do ABI e como ele facilita a chamada de funções e eventos de contratos, além de ver um exemplo prático de uso no Web3.js. Esse conhecimento é crucial para avançarmos no desenvolvimento de aplicações descentralizadas que interagem diretamente com contratos inteligentes.

## Recapitulação

1. **O que é um ABI**: Interface de comunicação para contratos inteligentes.
2. **Estrutura do ABI**: Componentes principais, como inputs, outputs e stateMutability.
3. **Obtendo um ABI**: Acesso ao ABI de contratos públicos, como no Etherscan.
4. **Usando ABIs no Web3.js**: Instância de contrato e chamada de funções.

## Lição de casa

1. **Fácil**: Obtenha o ABI de um contrato público no Etherscan e exiba no console.
2. **Médio**: Use o ABI de um contrato ERC20 para criar uma função que exibe o saldo de qualquer conta.
3. **Difícil**: Crie uma função que monitore um evento do contrato (por exemplo, `Transfer`) e exiba detalhes das transferências em tempo real.

## Próxima aula

Na próxima aula, vamos aprender **como se conectar com contratos inteligentes e ler dados simples utilizando Web3.js**. Nos vemos lá!
