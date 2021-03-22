import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../typescript/types'
import * as S from './styles'

import Header from '../../components/Header'
import Card from '../../components/Card'

export default function Home() {
    const navigation = useNavigation<NavigationProp>()

    return (
        <S.Container>
            <Header />
            <S.CardContainer>
                <Card type="income"/>
                <Card type="expense" />
                <Card total type="total"/>
            </S.CardContainer>
            <View>
                <S.TransitionButton >
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