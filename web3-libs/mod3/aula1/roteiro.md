# Aula 1: Como criar carteiras com Web3.py

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde aprenderemos sobre **Web3.py** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. O Web3.py é uma das bibliotecas mais usadas para conectar aplicações à blockchain Ethereum, e nesta aula, vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a Web3.py
2. Criando carteiras com Web3.py
3. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar a Web3.py no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar a Web3.py

Para começar, vamos instalar a versão mais recente do Web3.py.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Python** e o **pip** instalados.

2. **Instalando o Web3.py**:

```bash
pip install web3
```

---

## 2. Criando Carteiras com Web3.py

Para gerenciar uma conta na blockchain, é necessário criar uma carteira, composta por uma chave pública e uma chave privada.

### Exemplo 1: Criação de Carteira Aleatória

Para criar uma carteira aleatória (ou seja, uma conta com uma chave pública e uma chave privada), podemos usar a função `Account.create()` do Web3.py.

```python
from web3 import Web3
from eth_account import Account

# Cria uma conta aleatória
random_account = Account.create()

# Exibe a chave pública e privada
print("Endereço (chave pública):", random_account.address)
print("Chave privada:", random_account.key.hex())
```

### Exemplo 2: Importando Carteira de uma Chave Privada

Se você já possui uma chave privada, é possível gerar uma carteira com essa chave.

```python
from eth_account import Account

# Insira a chave privada aqui (exemplo fictício)
private_key = "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
imported_account = Account.from_key(private_key)

# Exibe o endereço da conta
print("Endereço:", imported_account.address)
```

### Exemplo 3: Armazenando Carteiras

Podemos armazenar as informações da carteira de forma segura usando keystores. O keystore permite proteger a chave privada com uma senha.

```python
from eth_account import Account
import json

# Gera uma conta aleatória
account = Account.create()

# Define uma senha para proteger o keystore
password = "minha_senha_segura"

# Cria o keystore criptografado
keystore = Account.encrypt(account.key, password)

# Salva o keystore em um arquivo JSON
with open("keystore.json", "w") as file:
    json.dump(keystore, file)

print("Keystore salvo com sucesso!")
```

---

## 3. Assinando Mensagens

Assinar uma mensagem é útil para autenticação e verificação de identidade sem realizar transações on-chain. Esse processo cria uma assinatura digital única usando a chave privada da conta.

### Exemplo: Assinando Mensagens

Vamos usar a função `Account.sign_message()` para assinar uma mensagem com a chave privada.

```python
from eth_account import Account
from eth_account.messages import encode_defunct

# Define a mensagem que será assinada
message = "Esta é uma mensagem de teste"
encoded_message = encode_defunct(text=message)

# Assinatura com a chave privada
private_key = "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
signed_message = Account.sign_message(encoded_message, private_key=private_key)

# Exibe a assinatura
print("Assinatura:", signed_message.signature.hex())
```

---

## Conclusão

Hoje aprendemos a instalar e configurar a Web3.py, exploramos as diferenças principais em relação ao Web3.js, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos o Web3.py.
- Aprendemos a criar e gerenciar carteiras, protegendo as chaves com keystores.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale o Web3.py em um novo projeto.
2. Crie uma nova carteira e armazene-a em um keystore.
3. Assine uma mensagem personalizada e verifique a assinatura em seu código.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando o Web3.py, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!
