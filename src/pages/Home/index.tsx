import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BalanceState, ITransaction, NavigationProp } from '../../typescript/types'
import * as S from './styles'
import { useModal } from '../../context/modal'
import { useTransaction } from '../../context/transactions'
import { CalculateBalance } from '../../utils/money'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

export default function Home() {
    const { transactions, transactionController } = useTransaction()
    const { modalController } = useModal()
    const navigation = useNavigation<NavigationProp>()
    const [balance, setBalance] = useState<BalanceState>({} as BalanceState)

    useEffect(()=>{
        (async () => {
            await getTransactions()
        })()
    }, [])

    useEffect(() => {
        (async () => {
            setBalance(CalculateBalance(transactions))
            await storeTransactions(transactions)
        })()
    }, [transactions])

    async function storeTransactions(transactions: ITransaction[]){
        try{
            await AsyncStorage.setItem('@app_transactions', JSON.stringify(transactions))
        }catch(err){
            console.log(err);
        }
    }

    async function getTransactions(){
        try{
            const recoveredTransactions = await AsyncStorage.getItem('@app_transactions')
            if(!!recoveredTransactions){
                const parsedTransactions = JSON.parse(recoveredTransactions)
                transactionController.ignoreAndSetRawTransactions(parsedTransactions)
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <S.Container>
            <Header />
            <Modal />
            <S.CardContainer>
                <Card type="income" value={balance.income}/>
                <Card type="expense" value={balance.expense}/>
                <Card type="total" value={balance.total}/>
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