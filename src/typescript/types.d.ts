import { DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";

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
export interface CardProps {
    total?: boolean
    type: IconType
}

export interface CardOnlyTotal {
    total?: boolean
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

export interface Transaction {
    description: string
    value: string
    date: string
}
