from web3 import Web3

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# ABI do contrato
abi = [
    {"type": "constructor", "inputs": [], "stateMutability": "nonpayable"},
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            {"name": "", "type": "address", "internalType": "address"},
            {"name": "", "type": "address", "internalType": "address"},
        ],
        "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {"name": "spender", "type": "address", "internalType": "address"},
            {"name": "amount", "type": "uint256", "internalType": "uint256"},
        ],
        "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
        "stateMutability": "nonpayable",
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [{"name": "", "type": "address", "internalType": "address"}],
        "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "burn",
        "inputs": [
            {"name": "from", "type": "address", "internalType": "address"},
            {"name": "amount", "type": "uint256", "internalType": "uint256"},
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{"name": "", "type": "uint8", "internalType": "uint8"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            {"name": "to", "type": "address", "internalType": "address"},
            {"name": "amount", "type": "uint256", "internalType": "uint256"},
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{"name": "", "type": "string", "internalType": "string"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{"name": "", "type": "string", "internalType": "string"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            {"name": "recipient", "type": "address", "internalType": "address"},
            {"name": "amount", "type": "uint256", "internalType": "uint256"},
        ],
        "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
        "stateMutability": "nonpayable",
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {"name": "sender", "type": "address", "internalType": "address"},
            {"name": "recipient", "type": "address", "internalType": "address"},
            {"name": "amount", "type": "uint256", "internalType": "uint256"},
        ],
        "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
        "stateMutability": "nonpayable",
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": True,
                "internalType": "address",
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": True,
                "internalType": "address",
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": False,
                "internalType": "uint256",
            },
        ],
        "anonymous": False,
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": True,
                "internalType": "address",
            },
            {
                "name": "to",
                "type": "address",
                "indexed": True,
                "internalType": "address",
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": False,
                "internalType": "uint256",
            },
        ],
        "anonymous": False,
    },
]

# Endereço do contrato
CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

# Cria uma instância do contrato
contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=abi)


address = input("Digite o endereço da conta: ")

# Função para verificar o saldo de uma conta
balance = contract.functions.balanceOf(address).call()
name = contract.functions.name().call()
print(f"Token name: {name}")
print(f"Saldo da conta {address} é: {web3.from_wei(balance, 'ether')} tokens")