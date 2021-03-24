import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'
import { ActionButtonProps, ModalContainerProps } from '../../typescript/types'

export const Container = styled.View<ModalContainerProps>`
    height: ${({ status }) => status ? '100%' : '0'};
    opacity: ${({ status }) => status ? 1 : 0};
    width: 100%;
    position: absolute;
    z-index: 10;
    justify-content: center;
    align-items: center;
    bottom: 0;
`

export const BackgroundEffect = styled.View`
    background: rgba(0, 0, 0, .8);    
    width: 100%;
    height: 100%;
`

export const ModalContainer = styled.View`
    border-radius: 8px;
    width: 94%;
    background: ${({ theme }) => theme.colors.concrete};
    z-index: 15;
    position: absolute;
    align-self: center;
    padding-horizontal: 20px;
    padding-vertical: 40px;
`

export const Label = styled.Text`
    font-size: 28px;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 40px;
    font-weight: 400;
`

export const Input = styled.TextInput`
    background: ${({ theme }) => theme.colors.white};
    height: 56px;
    padding-horizontal: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 20px;
    border-radius: 8px;
`

export const Hint = styled.Text`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 13px;
    opacity: .6;
    margin-top: -18px;
    text-align: justify;
    margin-bottom: 20px;
`

export const FakeInput = styled.View`
    background: ${({ theme }) => theme.colors.white};
    height: 56px;
    flex-direction: row;
    padding-horizontal: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 20px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
`

export const FakeInputText = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
    opacity: .5;
`

export const CalendarIcon = styled(Entypo).attrs(({
    name: "calendar"
}))`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.oakGreen};
`

export const ActionButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
    width: 48%;
    height: 65px;
    border-radius: 8px;
    background: ${({ theme, type }) => type === "cancel" ? theme.colors.white : theme.colors.lime};
    opacity: ${({ type }) => type === "cancel" ? 0.6 : 1};
    border: ${({ theme, type }) => `solid ${type === 'cancel' ? theme.colors.red : theme.colors.lime} 2px`};
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text<ActionButtonProps>`
    color: ${({ theme, type }) => type === "cancel" ? theme.colors.red : theme.colors.white};
    font-size: 20px;
`