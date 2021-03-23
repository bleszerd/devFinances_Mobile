import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp, Transaction } from '../../typescript/types'
import * as S from './styles'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'

import Header from '../../components/Header'
import { TransactionsTableData } from '../../typescript/types'
import { ScrollView } from 'react-native-gesture-handler'


const transactions: Transaction[] = [
    {
        description: "Água",
        value: '-120,52',
        date: '25/04/2021'
    },
    {
        description: "Energia",
        value: '-82,52',
        date: '26/04/2021'
    },
    {
        description: "Salário do mês",
        value: '3.200',
        date: '23/04/2021'
    },
]

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

            for (let transaction of transactions) {
                transaction.description = transaction.description.trim()

                if (transaction.description.length >= 85) {
                    transaction.description = transaction.description.substring(0, 85) + "..."
                }

                newTransactions.tableTitle.push(transaction.description)
            }

            setTableData(newTransactions)
            setLoading(false)
        }

        handleTableData()
    }, [])

    function extractSignal(transactionValue: string): boolean {
        return transactionValue.charAt(0) === '-'
    }

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
                    <S.TableRow data={["Descrição", "Valor", "Data"]} />

                    {
                        transactions.map(transact => {
                            return (
                                <View>
                                    <S.TableWrapper>
                                        <S.TableColumn
                                            data={[transact.description]}
                                            heightArr={[60]}
                                        />
                                        <S.TableRowData
                                            textStyle={{
                                                color: extractSignal(transact.value) ? "#990000" : "#49AA26",
                                                textAlign: 'center'
                                            }}
                                            data={[`R$ ${transact.value}`, transact.date]}
                                        />

                                    </S.TableWrapper>
                                </View>
                            )
                        })
                    }
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

const styles = StyleSheet.create({
    text: {
        color: "red"
    }
})