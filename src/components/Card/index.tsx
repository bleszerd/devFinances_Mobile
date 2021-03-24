import { View } from 'react-native'
import React from 'react'
import { CardProps } from '../../typescript/types'
import {handleIcon} from '../../utils/icon'
import * as S from './styles'

export default function Card({type }: CardProps) {
    const icon = handleIcon(type)

    return (
        <S.Container type={type}>
            <S.CardHeader>
                <S.CardLabel type={type}>Entradas</S.CardLabel>
                <icon.Component
                    name={icon.name}
                    color={icon.color}
                    size={icon.size}
                />
            </S.CardHeader>
            <View>
                <S.CardValue type={type}>R$ 0,00</S.CardValue>
            </View>
        </S.Container>
    )
}