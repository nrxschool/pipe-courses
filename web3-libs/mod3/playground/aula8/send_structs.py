from web3 import Web3
from abi import abi

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
account = web3.eth.account.from_key(PRIVATE_KEY)

# Endereço do contrato
contract_address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


# Cria uma instância do contrato
contract = web3.eth.contract(address=contract_address, abi=abi)


def add_people(name, age, gender):
    person = {"name": name, "age": age, "gender": gender}

    tx = contract.functions.pushPeople(person).build_transaction(
        {
            "from": account.address,
            "nonce": web3.eth.get_transaction_count(account.address),
        }
    )

    signed_tx = web3.eth.account.sign_transaction(tx, PRIVATE_KEY)
    tx_hash = web3.eth.send_raw_transaction(signed_tx.raw_transaction)
    web3.eth.wait_for_transaction_receipt(tx_hash)


male = 0
female = 1

add_people("Carlos", 32, male)