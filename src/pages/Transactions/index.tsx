import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp, Transaction } from '../../typescript/types'
import { Table } from 'react-native-table-component'
import * as S from './styles'
import Header from '../../components/Header'

export default function Home() {
    const navigation = useNavigation<NavigationProp>()
    const [loading, setLoading] = useState(true)
    const [transactions, setTransactions] = useState<Transaction[]>(
        [
            {
                description: "Água",
                value: '-120,52',
                date: '25/04/2021',
                id: 0
            },
            {
                description: "Energia",
                value: '-82,52',
                date: '26/04/2021',
                id: 1
            },
            {
                description: "Salário do mês",
                value: '3.200',
                date: '23/04/2021',
                id: 2
            },
        ]
    )

    useEffect(() => {
        setLoading(false)
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
                                <View key={transact.id}>
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
                                            data={[`R$\t ${transact.value}`, transact.date]}
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