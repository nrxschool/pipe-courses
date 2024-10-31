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


def get_people():
    person = contract.functions.getPerson().call()
    print("Nome:", person[0])
    print("Idade:", person[1])
    print("Gênero:", "Male" if person[2] == 0 else "Female")


get_people()
