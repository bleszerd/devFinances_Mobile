import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../typescript/types'
import * as S from './styles'
import {useModal} from '../../context/modal'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

export default function Home() {
    const {modalController} = useModal()
    const navigation = useNavigation<NavigationProp>()

    return (
        <S.Container>
            <Header />
            <Modal />
            <S.CardContainer>
                <Card type="income"/>
                <Card type="expense" />
                <Card type="total"/>
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