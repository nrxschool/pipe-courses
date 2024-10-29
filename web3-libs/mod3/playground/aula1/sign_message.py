from web3 import Web3

web3 = Web3()


# Function to sign a message
def sign_message():
    message = input("Enter the message to sign: ")
    # Create Account
    account = web3.eth.accounts.wallet.create(1)[0]
    print("Account:", account)

    # Sign the message
    signature = web3.eth.accounts.sign(message, account.privateKey)
    print("Signature:", signature.signature)

    # Verify the signature
    verify = web3.eth.accounts.recover("outra messagem", signature.signature)
    print("Verification:", "Success" if verify == account.address else "Failed")


# Call the function to sign a message
sign_message()
