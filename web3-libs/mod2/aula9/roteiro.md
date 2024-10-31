# Aula 9: **Como Criar Transações Complexas (Envio de ERC20)**

## Abertura

Olá! Bem-vindo à nossa aula sobre como criar transações complexas na blockchain, focando especificamente no envio de tokens ERC20. Hoje vamos entender como realizar transações usando o padrão ERC20, que é amplamente utilizado para tokens na rede Ethereum. Dois métodos essenciais para essas transações são `approve` e `transferFrom`, que juntos permitem o gerenciamento de permissões e a transferência segura de tokens entre carteiras.

### Programação:

1. O que são tokens ERC20 e suas transações
2. Método `approve`: Autorizando transferências
3. Método `transferFrom`: Transferindo tokens aprovados
4. Exemplos práticos e cuidados de segurança

---

## 1. O que são Tokens ERC20 e Suas Transações

- **Tokens ERC20** são contratos inteligentes que seguem um padrão comum na rede Ethereum, permitindo que diferentes tokens sejam facilmente trocados e usados em contratos, carteiras e dApps.
- **Transações de Tokens ERC20** envolvem métodos específicos definidos no padrão:
  - `transfer`: usado para enviar tokens diretamente de uma conta para outra.
  - **Transações complexas**: às vezes é necessário permitir que uma terceira parte envie tokens em seu nome, o que requer um sistema de permissões.
- **Objetivo do `approve` e `transferFrom`**:
  - **`approve`**: autoriza uma conta a gastar uma quantidade específica de tokens em nome do proprietário.
  - **`transferFrom`**: realiza a transferência dos tokens aprovados, com segurança e limites de autorização.

## 2. Método `approve`: Autorizando Transferências

- **`approve(address spender, uint256 amount)`**:
  - Este método permite que o proprietário de uma conta autorize outra conta (um “spender” ou "gastador") a transferir um valor específico de tokens em seu nome.
  - **Por que é importante**: Em transações mais complexas, como interações com dApps, o `approve` permite que um contrato ou conta externa tenha controle limitado sobre os tokens do usuário, garantindo mais segurança e controle.
  - **Como funciona**:
    - A conta de origem (quem possui os tokens) chama o método `approve`.
    - É especificado um endereço (quem pode gastar) e uma quantidade máxima de tokens que o “spender” pode transferir.
  - **Exemplo de código**:
    ```javascript
    const contract = new web3.eth.Contract(abiERC20, tokenAddress);
    await contract.methods
      .approve(spenderAddress, amount)
      .send({ from: ownerAddress });
    ```
  - **Atenção**:
    - Definir permissões muito altas (como `approve` para um número muito grande) pode ser arriscado, pois o “spender” terá mais controle sobre os tokens.

## 3. Método `transferFrom`: Transferindo Tokens Aprovados

- **`transferFrom(address from, address to, uint256 amount)`**:
  - Depois que uma conta é aprovada para gastar tokens, ela pode chamá-los usando o `transferFrom`.
  - **Utilidade**: Permite que dApps ou contratos interajam com tokens sem que o usuário precise manualmente enviar cada transação.
  - **Como funciona**:
    - O “spender” chama o método `transferFrom`, especificando o endereço de origem, o destinatário e a quantidade de tokens a ser transferida.
    - O contrato verifica se o `approve` foi definido e se o valor da transferência está dentro do limite autorizado.
    - Uma vez validado, a transferência é realizada.
  - **Exemplo de código**:
    ```javascript
    const contract = new web3.eth.Contract(abiERC20, tokenAddress);
    await contract.methods
      .transferFrom(ownerAddress, recipientAddress, amount)
      .send({ from: spenderAddress });
    ```
  - **Cuidados**:
    - `transferFrom` depende da autorização dada em `approve`, então certifique-se de que `approve` foi chamado e o limite permitido ainda não foi ultrapassado.
    - Lembre-se de que o limite pode ser ajustado ou redefinido pelo usuário a qualquer momento para mais segurança.

## 4. Exemplos Práticos e Cuidados de Segurança

- **Processo Completo**:
  - Passo 1: O proprietário chama `approve` para definir o limite de gasto para o “spender”.
  - Passo 2: O “spender” pode então usar `transferFrom` para transferir os tokens aprovados para outro endereço.
- **Cuidados de Segurança**:
  - É recomendado sempre definir o `approve` apenas para o valor exato que será utilizado ou limitar a quantidade de tempo em que a aprovação é válida.
  - **Revogação de Aprovação**: O usuário pode redefinir a quantidade permitida para zero chamando `approve(spender, 0)` para revogar permissões previamente concedidas.
  - **Exemplo de revogação**:
    ```javascript
    await contract.methods
      .approve(spenderAddress, 0)
      .send({ from: ownerAddress });
    ```

## Conclusão

O uso dos métodos `approve` e `transferFrom` é essencial para transações complexas envolvendo tokens ERC20, especialmente quando se deseja criar interações automatizadas e seguras com dApps. Esses métodos fornecem controle e segurança adicionais, permitindo que os usuários autorizem terceiros a mover tokens de maneira limitada. Essa prática é amplamente adotada para transações descentralizadas, pois oferece um controle refinado sobre os ativos.

## Recapitulação

1. **Tokens ERC20**: padrão para criação e movimentação de tokens em Ethereum.
2. **Método `approve`**: define um limite de gasto para uma terceira conta.
3. **Método `transferFrom`**: permite a transferência dos tokens autorizados.
4. **Exemplos e Segurança**: limitar permissões e revogar sempre que necessário.

## Lição de Casa

- **Fácil**: Realizar uma autorização básica usando `approve` e verificar o saldo do “spender”.
- **Médio**: Usar `transferFrom` para transferir uma quantidade específica de tokens a partir de um limite autorizado.
- **Difícil**: Criar um pequeno dApp que permita ao usuário realizar `approve` e `transferFrom` com segurança, incluindo a funcionalidade de revogação.

## Próxima Aula

Na próxima aula, vamos aprender como realizar transações complexas para enviar **Structs, Enums e Arrays** em contratos inteligentes. Nos vemos lá!
