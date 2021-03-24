import { DrawerNavigationProp } from "@react-navigation/drawer";
import React, { ReactNode } from "react";

/* ================================ Styled Components ================================ */
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            oakGreen: string
            lime: string
            white: string
            dark: string
            concrete: string
            red: string
        }
    }
}

/* ================================ Card ================================ */
export interface BalanceState {
    expense: number
    income: number
    total: number
}

export interface CardContainerProps {
    total?: boolean
    type: IconType
}

export interface CardProps {
    total?: boolean
    value: number
    type: IconType
}

export interface CardOnlyType {
    type?: IconType
}

export type IconType = "income" | "expense" | "total"

export interface IconObject {
    color: string
    Component: Icon
    name: string
    size: number
}

export interface IconsAvailable {
    income: IconObject
    expense: IconObject
    total: IconObject
}

/* ================================ Routes / Navigation ================================ */
export type NavigationProp = DrawerNavigationProp<
    RootStackParamList
>

/* ================================ Transactions ================================ */
export interface TransactionsTableData {
    tableHead: string[],
    tableTitle: string[],
    tableData: [
        [string, string]
    ] | [] | any
    heigthArr: number[]
}

export interface ITransaction {
    description: string
    value: string
    date: string
    id: number | string
}

export interface TransactionContext {
    transactions: Transaction[],
    transactionController: {
        addTransaction: (transaction: ITransaction) => void
        removeTransaction: (transactionId: number | string) => void
        ignoreAndSetRawTransactions: (transactions: ITransaction[]) => void
    }
}

export interface TransactionProviderProps {
    children: ReactNode
}

/* ================================ Modal ================================ */
export interface ModalContainerProps {
    status: boolean
}

export interface ActionButtonProps {
    type: "confirm" | "cancel"
}

export interface ModalContext {
    status: boolean
    modalController: {
        toggleModal: () => void
    }
}

export interface ModalProviderProps {
    children: ReactNode
}
