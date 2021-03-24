import styled from 'styled-components/native'
import { CardOnlyType, CardContainerProps } from '../../typescript/types'

export const Container = styled.View<CardContainerProps>`
    background: ${({ theme, type }) => type === "total" ? theme.colors.lime : theme.colors.white};
    height: 135px;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-horizontal: 15px;
    margin-bottom: 30px;
    border-radius: 6px;
`

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`

export const CardLabel = styled.Text<CardOnlyType>`
    font-size: 20px;
    color: ${({ theme, type }) => type === "total" ? theme.colors.white : theme.colors.dark};
`

export const CardValue = styled.Text<CardOnlyType>`
    color: ${({ theme, type }) => type === "total" ? theme.colors.white : theme.colors.dark};
    font-size: 36px;
`