import styled from "styled-components/native"
import { Feather } from '@expo/vector-icons'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.concrete};
`

export const CardContainer = styled.View`
    width: 92%;
    margin-top: -25%;
    align-self: center;
`

export const TransitionButton = styled.TouchableOpacity`
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
    padding-vertical: 12px;
    margin-bottom: 10px;
    width: 92%;
    border-radius: 11px;
    background: ${({ theme }) => theme.colors.white};
`

export const TransitionButtonGreen = styled(TransitionButton)`
    background: ${({ theme }) => theme.colors.lime};
`

export const PlusIcon = styled(Feather).attrs(({
    name: "plus"
}))`
    color: ${({ theme }) => theme.colors.lime};
    font-size: 22px;
`

export const ListIcon = styled(Feather).attrs(({
    name: "list"
}))`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.white};
`

export const TransitionButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.lime};
    font-size: 20px;
    margin-left: 8px;
`

export const TransitionButtonTextGreen = styled(TransitionButtonText)`
    color: ${({ theme }) => theme.colors.white};
`