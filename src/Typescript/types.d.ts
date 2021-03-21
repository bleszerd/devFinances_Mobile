import { DrawerNavigationProp } from "@react-navigation/drawer";

/* ================================ Card ================================ */
export interface CardProps {
    total?: boolean
}

/* ================================ Routes / Navigation ================================ */
export type HomeScreenNavigationProp = DrawerNavigationProp<
    RootStackParamList
>