# Aula 1: Como criar carteiras com Viem

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde exploraremos **Viem** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. Viem é uma biblioteca moderna para interagir com a blockchain Ethereum, e hoje vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a versão 2.x do Viem
2. Diferença entre Viem e Ethers.js
3. Criando carteiras com Viem
4. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar o Viem no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar o Viem v2

Para começar, vamos instalar a versão 2.x do Viem, que oferece uma API moderna e tipagem TypeScript nativa.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados.

2. **Instalando o Viem v2**:

```bash
npm install viem
```

---

## 2. Diferença entre Viem e Ethers.js

O Viem 2.x oferece várias vantagens em relação ao Ethers.js:

- **Performance superior**: Viem foi construído com foco em performance, oferecendo operações mais rápidas que bibliotecas tradicionais.
- **Tipagem TypeScript nativa**: Enquanto Ethers.js oferece suporte a TypeScript, Viem foi construído com TypeScript desde o início, proporcionando uma experiência de desenvolvimento mais robusta.
- **API modular**: Viem permite importar apenas as funcionalidades necessárias, reduzindo o tamanho final do bundle.
- **Melhor tratamento de erros**: Viem possui um sistema de erros mais detalhado e informativo.
- **Suporte a novas features**: Implementa nativamente suporte a novas features do ecossistema Ethereum como Account Abstraction e ERC-4337.
- **Menor tamanho de bundle**: O Viem é significativamente menor que o Ethers.js quando apenas funcionalidades específicas são importadas.

---

## 3. Criando Carteiras com Viem

Para gerenciar uma conta na blockchain, é necessário criar uma carteira, que inclui uma chave pública e uma chave privada.

- [Criação de Carteira Aleatória](../playground/aula1/createRandomWallet.js)
- [Importando Carteira de uma Chave Privada](../playground/aula1/importWalletFromPrivateKey.js)
- [Armazenando Carteiras](../playground/aula1/encryptWallet.js)

---

## 4. Assinando Mensagens

Assinar uma mensagem é útil para autenticação e verificação de identidade sem realizar transações on-chain. A assinatura é gerada usando a chave privada da conta.

- [Assinando Messagens](../playground/aula1/signMessage.js)

---

## Conclusão

Hoje instalamos e configuramos o Viem v2, exploramos suas principais diferenças em relação ao Ethers.js, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos o Viem v2 e discutimos suas vantagens sobre o Ethers.js.
- Aprendemos a criar e gerenciar carteiras usando as funções modernas do Viem.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale o Viem v2 em um novo projeto.
2. Crie uma nova carteira e explore as diferentes formas de criar contas.
3. Assine uma mensagem personalizada e implemente a verificação da assinatura.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando o Viem, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!