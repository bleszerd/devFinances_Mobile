import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp, ITransaction } from '../../typescript/types'
import { Table } from 'react-native-table-component'
import * as S from './styles'
import Header from '../../components/Header'
import { useTransaction } from '../../context/transactions'
import { extractSignal } from '../../utils/money'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function Home() {
    const navigation = useNavigation<NavigationProp>()
    const [loading, setLoading] = useState(true)
    const { transactions, transactionController } = useTransaction()

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <S.LoadingContainer>
                <S.LoadingText>Loading</S.LoadingText>
            </S.LoadingContainer>
        )
    }

    if (!transactions?.length) {
        return (
            <S.LoadingContainer>
                <S.LoadingText>Não há transações</S.LoadingText>
                <Text>Psiu, faz uma tela mais bonitinha!</Text>
            </S.LoadingContainer>
        )
    }

    function LeftActions(transactionId: number | string) {
        return (
            <S.ButtonDelete onPress={() => transactionController.removeTransaction(transactionId)}>
                <S.TrashIcon />
            </S.ButtonDelete>
        )
    }

    return (
        <S.Container>
            <Header />

            <S.TableContainer>
                <Table>
                    <S.TableRow data={["Descrição", "Valor", "Data"]} />

                    {
                        transactions.map((transact: ITransaction) => {
                            return (
                                <S.TableRowContainer key={transact.id}>
                                    <Swipeable
                                        renderLeftActions={() => LeftActions(transact.id)}
                                    >
                                        <S.TableRowContainer>
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
                                                    data={[`R$\t ${parseFloat(transact.value).toFixed(2)}`, transact.date]}
                                                />

                                            </S.TableWrapper>
                                        </S.TableRowContainer>
                                    </Swipeable>
                                </S.TableRowContainer>
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