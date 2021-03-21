import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../Typescript/types'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

import Header from '../components/Header'

export default function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>()

    const [tableData, setTableData] = useState({
        tableHead: ['', 'Descrição', 'Valor', 'Data'],
        tableTitle: ['Água', 'Força', 'Água', 'Força'],
        tableData: [
            ['1', '2', '3'],
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['a', 'b', 'c'],
        ]
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.tableContainer}>
                
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f2f5",
    },
    tableContainer: {
        paddingHorizontal: 5,
        marginTop: "-25%",
        width: "92%",
        alignSelf: 'center',
    },
});