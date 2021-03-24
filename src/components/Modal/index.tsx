import React, { useEffect, useState } from 'react'
import DatePicker from '@react-native-community/datetimepicker'
import * as S from './styles'
import { Keyboard } from 'react-native'
import { useModal } from '../../context/modal'
import { useTransaction } from '../../context/transactions'
import { parseDateToLocal } from '../../utils/datetime'
import { ITransaction } from '../../typescript/types'

export default function Modal() {
    const { transactions, transactionController } = useTransaction()
    const { status, modalController } = useModal()
    const [date, setDate] = useState(new Date())
    const [dateStr, setDateStr] = useState("01/01/20")
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")

    useEffect(() => {
        // console.log(transactions);
    }, [transactions])

    const onChange = (event: any, selectedDate: any) => {
        if (!selectedDate) {
            setShowDatePicker(false)
            return
        }

        const sanitizedDate = parseDateToLocal(selectedDate)

        setShowDatePicker(false)
        setDateStr(sanitizedDate);
        setDate(selectedDate || date);
    };

    function createNewTransaction() {
        const newTransact: ITransaction = {
            id: transactions.length + 1,
            description,
            date: dateStr,
            value
        }

        transactionController.addTransaction(newTransact)
        setDescription("")
        setDate(new Date())
        setValue("")
        setDateStr("01/01/20")
        Keyboard.dismiss()
        modalController.toggleModal()
    }

    function handleDatePickerTouch() {
        setShowDatePicker(true)
        Keyboard.dismiss()
    }

    function cancelTransaction(){
        setDescription("")
        setDate(new Date())
        setValue("")
        setDateStr("01/01/20")
        Keyboard.dismiss()
        modalController.toggleModal()
    }

    return (
        <S.Container status={status}>
            <S.BackgroundEffect onTouchStart={modalController.toggleModal} />
            <S.ModalContainer>
                <S.Label>Nova Transação</S.Label>

                <S.Input
                    placeholder="Descrição"
                    value={description}
                    onChangeText={e => setDescription(e)}
                />
                <S.Input
                    placeholder="0,00"
                    keyboardType="number-pad"
                    value={value}
                    onChangeText={e => setValue(e)}
                />
                <S.Hint>Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</S.Hint>

                <S.FakeInput onTouchStart={handleDatePickerTouch}>
                    <S.FakeInputText>{dateStr}</S.FakeInputText>
                    <S.CalendarIcon />
                </S.FakeInput>
                {
                    showDatePicker && (
                        <DatePicker
                            value={date}
                            mode="date"
                            onChange={onChange}
                        />
                    )
                }

                <S.ActionButtons>
                    <S.ActionButton
                        type="cancel"
                        onPress={cancelTransaction}
                    >
                        <S.ButtonText type="cancel">Cancelar</S.ButtonText>
                    </S.ActionButton>

                    <S.ActionButton
                        type="confirm"
                        onPress={createNewTransaction}
                    >
                        <S.ButtonText type="confirm">Salvar</S.ButtonText>
                    </S.ActionButton>

                </S.ActionButtons>

            </S.ModalContainer>
        </S.Container >
    )
}