import { DrawerNavigationProp } from "@react-navigation/drawer";

/* ================================ Card ================================ */
export interface CardProps {
    total?: boolean
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