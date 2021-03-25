import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BalanceState, NavigationProp } from '../../typescript/types'
import { useModal } from '../../context/modal'
import { useTransaction } from '../../context/transactions'
import { CalculateBalance } from '../../utils/money'
import { storeAsyncData, getAsyncData } from '../../utils/data'

import * as S from './styles'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

export default function Home() {
    const { transactions, transactionController } = useTransaction()
    const { modalController } = useModal()
    const [balance, setBalance] = useState<BalanceState>({} as BalanceState)
    const navigation = useNavigation<NavigationProp>()

    useEffect(() => {
        (
            async () => {
                const recoveredTransactions = await getAsyncData('@app_transactions')
                transactionController.ignoreAndSetRawTransactions(recoveredTransactions)
            }
        )()
    }, [])

    useEffect(() => {
        (
            async () => {
                setBalance(CalculateBalance(transactions))
                storeAsyncData(transactions, '@app_transactions')
            }
        )()
    }, [transactions])

    return (
        <S.Container>
            <Header />
            <Modal />
            <S.CardContainer>
                <Card type="income" value={balance.income} />
                <Card type="expense" value={balance.expense} />
                <Card type="total" value={balance.total} />
            </S.CardContainer>
            <View>
                <S.TransitionButton
                    onPress={modalController.toggleModal}
                >
                    <S.PlusIcon />
                    <S.TransitionButtonText>Nova Transação</S.TransitionButtonText>
                </S.TransitionButton>

                <S.TransitionButtonGreen
                    onPress={() => navigation.navigate("Transactions")}
                >
                    <S.ListIcon />
                    <S.TransitionButtonTextGreen>Ver transações</S.TransitionButtonTextGreen>
                </S.TransitionButtonGreen>
            </View>
        </S.Container>
    )
}