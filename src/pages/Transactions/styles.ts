import styled from 'styled-components/native'
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { TableWrapper as TlbWppr, Row, Col } from 'react-native-table-component'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.concrete};
`

export const TableContainer = styled.ScrollView`
    padding-horizontal: 5px;
    margin-top: -25%;
    width: 98%;
    align-self: center;
`

export const RadiusEffect = styled.View`
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.white};
    border-bottom-right-radius: 11px;
    border-bottom-left-radius: 11px;
    margin-bottom: 70px;
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

export const TableWrapper = styled(TlbWppr)`
    flex-direction: row;
    background: ${({ theme }) => theme.colors.white};
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

export const TableRowData = styled(Row)`
    margin-left: 1.5%;
    width: 72%;
`

export const TableRowContainer = styled.View`
    background: ${({ theme }) => theme.colors.concrete};
`


export const ButtonDelete = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 60px;
    background: #ff9999;
`

export const TrashIcon = styled(FontAwesome5).attrs(({
    name: "trash"
}))`
    color: ${({theme}) => theme.colors.white};
    font-size: 20px;
`