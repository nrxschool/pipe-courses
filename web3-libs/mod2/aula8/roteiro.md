# Aula 8: **Como se Conectar com Contratos**

## Abertura

Olá! Bem-vindo à oitava aula do nosso curso de Bibliotecas Web3! Hoje, vamos explorar como conectar-se a contratos inteligentes na blockchain utilizando Web3.js. Aprenderemos como configurar o contrato no código, se conectar a ele e interagir com suas funções.

### Programação:

1. Conceitos básicos de contratos inteligentes
2. Configuração do contrato no Web3.js
3. Conexão com o contrato usando endereço e ABI
4. Interação com funções do contrato

---

## 1. Conceitos Básicos de Contratos Inteligentes

- **Definição**: Contratos inteligentes são programas que residem na blockchain e executam ações automaticamente quando determinadas condições são atendidas.
- **Aplicações**:
  - Realização de transações seguras.
  - Execução de lógica de negócios automatizada.
  - Armazenamento e gerenciamento de dados.
- **Elementos Importantes**:
  - **Endereço do Contrato**: Localização única do contrato na blockchain.
  - **ABI (Application Binary Interface)**: Interface que define as funções e estruturas do contrato, permitindo ao Web3.js interpretar como se comunicar com o contrato.

## 2. Configuração do Contrato no Web3.js

- **Obtendo o Endereço do Contrato**:
  - O endereço do contrato é gerado quando o contrato é implantado na blockchain. Para esta aula, utilizaremos um endereço de contrato em uma rede de teste.
  - Exemplo:
    ```javascript
    const contractAddress = "0xEndereçoDoContrato";
    ```
- **Obtendo o ABI do Contrato**:
  - O ABI é um arquivo JSON gerado no processo de compilação do contrato. Ele descreve as funções, eventos e tipos de dados do contrato.
  - O ABI pode ser obtido por meio de compiladores como o Remix, Truffle, ou consultando um explorador de blocos como Etherscan (nas redes compatíveis).
  - Exemplo:
    ```javascript
    const contractABI = [
      /* ABI JSON aqui */
    ];
    ```

## 3. Conexão com o Contrato Usando Endereço e ABI

- **Instanciação do Contrato no Web3.js**:

  - Para se conectar ao contrato, utilize o endereço e o ABI para criar uma instância do contrato no Web3.js.
  - Exemplo de código:

    ```javascript
    const Web3 = require("web3");
    const web3 = new Web3("https://goerli.infura.io/v3/SEU_INFURA_PROJECT_ID");

    const myContract = new web3.eth.Contract(contractABI, contractAddress);
    ```

- **Validação da Conexão**:
  - Verifique se o contrato foi instanciado corretamente. Isso pode ser feito tentando acessar uma função ou variável pública do contrato para garantir a comunicação.

## 4. Interação com Funções do Contrato

- **Chamadas de Leitura (Call)**:
  - As funções de leitura não alteram o estado da blockchain e, portanto, não consomem gas.
  - Exemplo de leitura de uma função chamada `getBalance`:
    ```javascript
    myContract.methods
      .getBalance()
      .call()
      .then((result) => console.log("Saldo:", result))
      .catch((error) => console.error("Erro:", error));
    ```
- **Chamadas de Escrita (Send)**:
  - As funções que alteram o estado da blockchain, como transferências, exigem assinatura e consumo de gas.
  - Exemplo de envio de uma função chamada `transferFunds`:
    ```javascript
    myContract.methods
      .transferFunds("0xEnderecoDestinatario", web3.utils.toWei("0.1", "ether"))
      .send({ from: "0xEnderecoDoRemetente", gas: 200000 })
      .then((receipt) => console.log("Transação enviada:", receipt))
      .catch((error) => console.error("Erro ao enviar a transação:", error));
    ```
- **Eventos do Contrato**:
  - Contratos inteligentes podem emitir eventos que ajudam a rastrear alterações no estado ou operações executadas.
  - Exemplo de escuta de um evento chamado `TransferEvent`:
    ```javascript
    myContract.events
      .TransferEvent({ filter: {}, fromBlock: "latest" })
      .on("data", (event) => console.log("Evento detectado:", event))
      .on("error", console.error);
    ```

---

## Conclusão

Hoje exploramos como se conectar a contratos inteligentes usando Web3.js, cobrindo desde a configuração do contrato com endereço e ABI até a interação com suas funções. Conectar-se a contratos permite o controle programático de várias operações blockchain, expandindo as capacidades de aplicações descentralizadas.

## Recapitulação

1. **Conceitos de contratos inteligentes**: Definição e função dos contratos na blockchain.
2. **Configuração do contrato no Web3.js**: Utilização de endereço e ABI para definir o contrato.
3. **Conexão com o contrato**: Instanciação do contrato no Web3.js.
4. **Interação com funções do contrato**: Chamadas de leitura, escrita e escuta de eventos.

## Lição de Casa

1. **Fácil**: Obter o ABI de um contrato inteligente de teste.
2. **Médio**: Criar uma conexão com um contrato em uma rede de teste e realizar uma chamada de leitura.
3. **Difícil**: Realizar uma chamada de escrita em um contrato de teste e monitorar eventos emitidos pelo contrato.

## Próxima Aula

Na próxima aula, vamos aprender a **ler dados simples do contrato** como tipos primitivos, usando Web3.js. Nos vemos lá!