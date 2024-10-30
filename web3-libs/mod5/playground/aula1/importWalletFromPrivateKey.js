import { privateKeyToAccount } from 'viem/accounts'

const privateKey = '0x2a227235514c6334f9b88aa4088e1dbb1e3d1a5ee23053ff2a26a4ae9f51b7a1'
const account = privateKeyToAccount(privateKey)
console.log('Endereço:', account.address)