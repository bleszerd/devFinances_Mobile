import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../Typescript/types'

import Header from '../components/Header'
import Card from '../components/Card'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>()

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.cardContainer}>
                <Card />
                <Card />
                <Card total />
            </View>
            <View>
                <TouchableOpacity style={{ ...styles.transitionBtn, backgroundColor: "#ffffff" }}>
                    <Feather
                        name="plus"
                        size={22}
                        color="#49AA26"
                    />
                    <Text style={{ ...styles.transitionBtnText, color: "#49AA26" }}>Nova Transação</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.transitionBtn, backgroundColor: "#49AA26" }}
                    onPress={() => navigation.navigate("Transactions")}
                >
                    <Feather
                        name="list"
                        size={22}
                        color="#ffffff"
                    />
                    <Text style={{ ...styles.transitionBtnText, color: "#ffffff" }}>Ver transações</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f2f5",
    },
    cardContainer: {
        width: "92%",
        marginTop: "-25%",
        alignSelf: 'center'
    },
    transitionBtn: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "4%",
        paddingVertical: 12,
        marginBottom: 10,
        width: "92%",
        borderRadius: 11,
    },
    transitionBtnText: {
        fontSize: 20,
        marginLeft: 4,
    }
})