import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardProps } from '../../typescript/types'
import { handleIcon } from '../../utils/icon'
import * as S from './styles'

export default function Card({ type, value }: CardProps) {
    const [cardLabel, setCardLabel] = useState("Entradas")

    const icon = handleIcon(type)

    useEffect(() => {
        (function handleText() {
            switch (type) {
                case "expense":
                    setCardLabel("Saidas")
                    break
                case "income":
                    setCardLabel("Entradas")
                    break
                default:
                    setCardLabel("Total")
                    break
            }
        })()
    }, [])

    return (
        <S.Container type={type}>
            <S.CardHeader>
                <S.CardLabel type={type}>{cardLabel}</S.CardLabel>
                <icon.Component
                    name={icon.name}
                    color={icon.color}
                    size={icon.size}
                />
            </S.CardHeader>
            <View>
                <S.CardValue type={type}>R$ {type === "expense" && !!value && '-'}{value ? value.toFixed(2) : "0,00"}</S.CardValue>
            </View>
        </S.Container>
    )
}