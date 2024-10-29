from web3 import Web3

# Create Web3 instance
web3 = Web3()

# Create Account
PRIVATE_KEY = "0xb762c5177d93ae67873060b655b652eecddca5085d918c2de4ca23b1e6be4812"
account = web3.eth.accounts.wallet.add(PRIVATE_KEY)
print(account)
