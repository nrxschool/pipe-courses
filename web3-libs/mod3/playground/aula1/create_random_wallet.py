from web3 import Web3
from eth_account import Account

# Create Web3 instance
web3 = Web3()

# Create Account
account = Account.create()
print(account)
