import { IconsAvailable, IconType } from "../typescript/types"
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

function handleIcon(type: IconType) {
    const typesAvailable: IconsAvailable = {
        income: {
            color: "#49AA26",
            Component: MaterialCommunityIcons,
            name: "arrow-up-circle-outline",
            size: 40,
        },
        expense: {
            color: "#990000",
            Component: MaterialCommunityIcons,
            name: "arrow-down-circle-outline",
            size: 40,
        },
        total: {
            color: "#FFFFFF",
            Component: Feather,
            name: "dollar-sign",
            size: 35,
        },
    }

    return typesAvailable[type]
}

export {
    handleIcon
}