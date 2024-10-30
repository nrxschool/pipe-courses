# Aula 1: Como criar carteiras com Ethers.js

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde exploraremos **Ethers.js** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. Ethers.js é uma biblioteca popular para interagir com a blockchain Ethereum, e hoje vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a versão 6.x da Ethers.js
2. Diferença entre Ethers.js e Web3.js
3. Criando carteiras com Ethers.js
4. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar o Ethers.js no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar a Ethers.js v6

Para começar, vamos instalar a versão 6.x da Ethers.js, que traz diversas melhorias e uma API modernizada.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados.

2. **Instalando o Ethers.js v6**:

```bash
npm install ethers
```

---

## 2. Diferença entre Ethers.js e Web3.js

O Ethers.js v6.x oferece várias vantagens em relação ao Web3.js, como:

- **API simplificada**: Ethers.js é conhecido por ser mais leve e intuitivo, com uma estrutura de código focada em simplificar a interação com contratos e transações Ethereum.
- **Tamanho reduzido**: O pacote Ethers.js é menor e mais otimizado para performance, ideal para aplicações onde o desempenho e tamanho de arquivo são cruciais.
- **Integração de carteira nativa**: O Ethers.js facilita o gerenciamento seguro das chaves privadas.
- **Melhor compatibilidade com TypeScript**: A biblioteca oferece suporte abrangente para TypeScript, melhorando a experiência de desenvolvimento.

---

## 3. Criando Carteiras com Ethers.js

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

Hoje instalamos e configuramos o Ethers.js v6, exploramos suas principais diferenças em relação ao Web3.js, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos o Ethers.js v6 e discutimos suas vantagens sobre o Web3.js.
- Aprendemos a criar e gerenciar carteiras, protegendo as chaves com keystores.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale o Ethers.js v6 em um novo projeto.
2. Crie uma nova carteira e armazene-a em um keystore.
3. Assine uma mensagem personalizada e verifique a assinatura em seu código.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando o Ethers.js, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!
