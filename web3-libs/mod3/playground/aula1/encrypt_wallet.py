from web3 import Web3
import json

# Create Web3 instance
web3 = Web3()

# Create Account
account = web3.eth.accounts.create()
private_key = account.privateKey.hex()
print("Chave Privada:", private_key)


# Function to ask for password and encrypt the private key
def encrypt_private_key():
    password = input("Digite sua senha para encriptar: ")
    keystore = web3.eth.accounts.encrypt(private_key, password)
    print("Keystore Encriptado:", json.dumps(keystore, indent=2))

    # Call the function to decrypt
    decrypt_keystore(keystore)


# Function to ask for password and decrypt the private key
def decrypt_keystore(keystore):
    password = input("Digite sua senha para decriptar: ")
    try:
        decrypted_account = web3.eth.accounts.decrypt(keystore, password)
        print("Conta Decriptada:", decrypted_account)
    except Exception as e:
        print("Erro ao decriptar a chave:", str(e))


# Start the process
encrypt_private_key()
