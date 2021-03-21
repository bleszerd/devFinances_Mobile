import { View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { CardProps } from '../../Typescript/types'

export default function Card({ total }: CardProps) {

    return (
        <View style={{ ...styles.container, backgroundColor: total ? "#49AA26" : "#ffffff" }}>
            <View style={styles.cardHeader}>
                <Text style={{ ...styles.cardLabel, color: total ? "#ffffff" : "#363f5f" }}>Entradas</Text>
                <MaterialCommunityIcons
                    name="arrow-up-circle-outline"
                    color={total ? "#ffffff" : "#49AA26"}
                    size={32}
                />
            </View>
            <View>
                <Text style={{ ...styles.cardValue, color: total ? "#ffffff" : "#363f5f" }}>R$ 0,00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 135,
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 20,
        marginBottom: 30,
        borderRadius: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1,
    },
    cardLabel: {
        fontSize: 20,
        color: "#363f5f",
    },
    cardValue: {
        fontSize: 36,
        color: "#363f5f",
    }
})