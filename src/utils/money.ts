import { ITransaction } from "../typescript/types"

function extractSignal(transactionValue: string): boolean {
    return transactionValue.charAt(0) === '-'
}

function CalculateBalance(transactions: ITransaction[]) {
    let expense = 0;
    let income = 0;

    transactions.forEach(transact => {
        const signed = extractSignal(transact.value)
        if (signed) {
            expense += parseFloat(transact.value)
            return
        }

        income += parseFloat(transact.value)
    })

    return {
        expense: Math.abs(expense),
        income: Math.abs(income),
        total: Math.abs(income) - Math.abs(expense)
    }
}

function sanitizeValue() {

}

export {
    extractSignal,
    CalculateBalance,
}