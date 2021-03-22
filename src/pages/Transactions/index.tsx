import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../typescript/types'
import * as S from './styles'

import Header from '../../components/Header'
import { TransactionsTableData } from '../../typescript/types'


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
            <S.LoadingContainer>
                <S.LoadingText>Loading</S.LoadingText>
            </S.LoadingContainer>
        )
    }

    return (
        <S.Container>
            <Header />

            <S.TableContainer>
                <Table>
                    <S.TableRow data={tableData.tableHead} />
                    <S.TableWrapper>
                        <S.TableColumn
                            data={tableData.tableTitle}
                            heightArr={tableData.heigthArr}
                        />
                        <S.TableRows
                            data={tableData.tableData}
                            heightArr={tableData.heigthArr}
                        />
                    </S.TableWrapper>
                </Table>

                <S.RadiusEffect />

            </S.TableContainer>

            <S.ButtonContainer>
                <S.BackButton
                    onPress={() => navigation.goBack()}
                >
                    <S.ArrowLeftIcon />
                    <S.BackButtonText>Voltar</S.BackButtonText>
                </S.BackButton>
            </S.ButtonContainer>
        </S.Container>
    )
}