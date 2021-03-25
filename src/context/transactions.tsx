import React, { createContext, useContext, useState } from 'react'
import { ITransaction, TransactionContext, TransactionProviderProps } from '../typescript/types'

const Transaction = createContext<TransactionContext>({} as TransactionContext)

export default function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([] as ITransaction[])

    function addTransaction(transaction: ITransaction) {
        let newTransact = transaction
        newTransact.value = transaction.value.replace(",", ".")

        setTransactions([
            ...transactions,
            newTransact
        ])
    }

    function removeTransaction(transactionId: number | string) {
        let newTransactArr: ITransaction[] = [] as ITransaction[]

        transactions.forEach(transact => {
            if (transact.id != transactionId) {
                newTransactArr.push(transact)
            }
        })

        setTransactions(newTransactArr)
    }

    function ignoreAndSetRawTransactions(transactions: ITransaction[]) {
        setTransactions(transactions)
    }

    return (
        <Transaction.Provider
            value={{
                transactions,
                transactionController: {
                    addTransaction,
                    removeTransaction,
                    ignoreAndSetRawTransactions
                }
            }}
        >
            {children}
        </Transaction.Provider>
    )
}

export function useTransaction() {
    const context = useContext(Transaction)
    const { transactions, transactionController } = context
    return { transactions, transactionController }
}