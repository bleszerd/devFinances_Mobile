import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../Typescript/types'

import Header from '../components/Header'
import { TransactionsTableData } from '../Typescript/types'


const transactionsData = {
    transactions: [
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
        {
            description: "Água",
            value: '120,52',
            date: '25/02/2021'
        },
    ]
}

export default function Home() {
    const navigation = useNavigation<NavigationProp>()
    const [loading, setLoading] = useState(true)
    const [tableData, setTableData] = useState<TransactionsTableData>({
        tableHead: ['Descrição', 'Valor', 'Data'],
        tableTitle: [],
        tableData: [],
        heigthArr: []
    })

    useEffect(() => {
        function handleTableData() {
            let newTransactions: TransactionsTableData = {
                tableHead: ['Descrição', 'Valor', 'Data'],
                tableTitle: [],
                tableData: [],
                heigthArr: []
            }

            for (let transaction of transactionsData.transactions) {
                newTransactions.tableTitle.push(transaction.description)
                newTransactions.tableData.push([transaction.value, transaction.date])
                newTransactions.heigthArr.push(50)
            }

            setTableData(newTransactions)
            setLoading(false)
        }

        handleTableData()
    }, [])


    if (loading) {
        return (
            <SafeAreaView>
                <Text>Loading</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.tableContainer}>
                <Table borderStyle={styles.tableBorder}>
                    <Row
                        data={tableData.tableHead}
                        flexArr={[.9, 1, 1]}
                        style={styles.tableHead}
                        textStyle={styles.headText}
                    />
                    <TableWrapper style={styles.tableWrapper}>
                        <Col
                            data={tableData.tableTitle}
                            style={styles.tableTitle}
                            heightArr={tableData.heigthArr}
                            textStyle={styles.colText}
                            width={100}
                        />
                        <Rows
                            data={tableData.tableData}
                            flexArr={[1.6, 1, 1]}
                            heightArr={tableData.heigthArr}
                            style={styles.tableRows}
                            textStyle={styles.rowsText}
                        />
                    </TableWrapper>
                </Table>
                <View style={styles.radiusEffect} />
            </ScrollView>

            <View style={styles.butonContainer}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="arrow-left"
                        size={22}
                        color="#49AA26"
                    />
                    <Text style={styles.buttonText}>Voltar</Text>
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
    tableContainer: {
        paddingHorizontal: 5,
        marginTop: "-25%",
        width: "92%",
        alignSelf: 'center',
    },
    tableBorder: {
        //no style
    },
    tableHead: {
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        marginBottom: 4,
        height: 40,
        backgroundColor: '#efefef',
    },
    headText: {
        color: "#363f5f",
        opacity: .6,
        textAlign: 'center',
    },
    tableWrapper: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    tableTitle: {
        backgroundColor: '#ffffff',
    },
    colText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: .6,
        color: "#363f5f",
        paddingHorizontal: 5,
    },
    tableRows: {
        backgroundColor: '#ffffff',
        paddingRight: 5,
    },
    rowsText: {
        textAlign: 'center',
        color: "#363f5f",
        fontSize: 14,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    radiusEffect: {
        width: "100%",
        height: 5,
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11,
        marginBottom: 70,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        marginLeft: 4,
        color: "#ffffff"
    },
    butonContainer: {
        backgroundColor: "#22460a",
        width: "100%",
        position: 'absolute',
        paddingVertical: 15,
        paddingHorizontal: 26,
        bottom: 0,
    }
});