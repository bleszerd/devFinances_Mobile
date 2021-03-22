import styled from 'styled-components/native'
import { Table, TableWrapper as TABWRAP, Row, Rows, Col } from 'react-native-table-component'
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.concrete};
`

export const TableContainer = styled.ScrollView`
    padding-horizontal: 5px;
    margin-top: -25%;
    width: 92%;
    align-self: center;
`

export const TableWrapper = styled(TABWRAP)`
    flex-direction: row;
    background: ${({ theme }) => theme.colors.white};
`

export const RadiusEffect = styled.View`
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.white};
    border-bottom-right-radius: 11px;
    border-bottom-left-radius: 11px;
    margin-bottom: 70px;
`

export const TableRow = styled(Row).attrs(({ theme }) => ({
    flexArr: [.9, 1, 1],
    textStyle: {
        color: theme.colors.dark,
        opacity: .6,
        textAlign: 'center',
    }
}))`
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    margin-bottom: 4px;
    height: 40px;
    background: ${({ theme }) => theme.colors.white};
`

export const TableColumn = styled(Col).attrs(({ theme }) => ({
    textStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: .6,
        color: theme.colors.dark,
        paddingHorizontal: 5,
    },
    width: 100
}))`
    background: ${({ theme }) => theme.colors.white};
`

export const TableRows = styled(Rows).attrs(({ theme }) => ({
    textStyle: {
        textAlign: 'center',
        color: theme.colors.dark,
        fontSize: 14,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    flexArr: [1.6, 1, 1]
}))`
    background: ${({ theme }) => theme.colors.white};
    padding-right: 5px;
`

export const ButtonContainer = styled.View`
    background: ${({ theme }) => theme.colors.oakGreen};
    width: 100%;
    position: absolute;
    padding-vertical: 15px;
    padding-horizontal: 26px;
    bottom: 0;
`

export const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const BackButtonText = styled.Text`
    font-size: 20px;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.white};
`

export const ArrowLeftIcon = styled(Feather).attrs(({
    name: "arrow-left",
    size: 22
}))`
    color: ${({ theme }) => theme.colors.lime};
`

export const LoadingContainer = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.concrete};
    justify-content: center;
    align-items: center;
`

export const LoadingText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lime};
`