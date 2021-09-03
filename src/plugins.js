import { CONSTANTS } from 'depay-web3-constants'

export default {
  ethereum: {
    payment: {
      address: '0x99F3F4685a7178F26EB4F4Ca8B75a1724F1577B9'
    },
    uniswap_v2: {
      address: '0xe04b08Dfc6CaA0F4Ec523a3Ae283Ece7efE00019',
      prepareTransaction: (transaction)=> {
        transaction.params.path = transaction.params.path.filter((token, index, path)=>{
          if(
            index == 1 &&
            token == CONSTANTS[transaction.blockchain].WRAPPED &&
            path[0] == CONSTANTS[transaction.blockchain].NATIVE
          ) { 
            return false
          } else if (
            index == path.length-2 &&
            token == CONSTANTS[transaction.blockchain].WRAPPED &&
            path[path.length-1] == CONSTANTS[transaction.blockchain].NATIVE
          ) {
            return false
          } else {
            return true
          }
        })
        return transaction
      }
    },
    event: {
      address: '0x6A12C2Cc8AF31f125484EB685F7c0bfcE280B919'
    }
  },
  bsc: {
    payment: {
      address: '0x8B127D169D232D5F3ebE1C3D06CE343FD7C1AA11',
    },
    pancakeswap: {
      address: '0xAC3Ec4e420DD78bA86d932501E1f3867dbbfb77B',
      prepareTransaction: (transaction)=> {
        transaction.params.path = transaction.params.path.filter((token, index, path)=>{
          if(
            index == 1 &&
            token == CONSTANTS[transaction.blockchain].WRAPPED &&
            path[0] == CONSTANTS[transaction.blockchain].NATIVE
          ) { 
            return false
          } else if (
            index == path.length-2 &&
            token == CONSTANTS[transaction.blockchain].WRAPPED &&
            path[path.length-1] == CONSTANTS[transaction.blockchain].NATIVE
          ) {
            return false
          } else {
            return true
          }
        })
        return transaction
      }
    },
    event: {
      address: '0xf83f63ccf66dfd9ef285e58217352835c470c56c'
    }
  } 
}
