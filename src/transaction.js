/*#if _EVM

import { getTransaction as evmGetTransaction } from './platforms/evm/transaction'
let solanaGetTransaction = ()=>{}

/*#elif _SOLANA

let evmGetTransaction = ()=>{}
let evmGetTransactionAmounts = ()=>{}
import { getTransaction as solanaGetTransaction} from './platforms/solana/transaction'

//#else */

import { getTransaction as evmGetTransaction } from './platforms/evm/transaction'
import { getTransaction as solanaGetTransaction} from './platforms/solana/transaction'

//#endif

import { supported } from './blockchains'

const getTransaction = ({ paymentRoute, fee })=>{
  if(supported.evm.includes(paymentRoute.blockchain)) {
    return evmGetTransaction({ paymentRoute, fee })
  } else if(supported.solana.includes(paymentRoute.blockchain)) {
    return solanaGetTransaction({ paymentRoute, fee })
  } else {
    throw('Blockchain not supported!')
  }
}

export {
  getTransaction
}
