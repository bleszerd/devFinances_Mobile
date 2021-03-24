import React, { useState } from 'react'
import DatePicker from '@react-native-community/datetimepicker'
import * as S from './styles'
import {useModal} from '../../context/modal'

export default function Modal() {
    const {status, modalController} = useModal()
    const [date, setDate] = useState(new Date())
    const [dateStr, setDateStr] = useState("01/02/1998")
    const [showDatePicker, setShowDatePicker] = useState(false)

    const onChange = (event: any, selectedDate: any) => {
        if (!selectedDate) {
            setShowDatePicker(false)
            return
        }

        const sanitizedDate = parseDate(selectedDate)

        setShowDatePicker(false)
        setDateStr(sanitizedDate);
        setDate(selectedDate || date);
    };

    function parseDate(date: Date) {
        const splitedDate = date.toLocaleDateString().split('/')
        const finalDate = `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`

        return finalDate
    }

    return (
        <S.Container status={status}>
            <S.BackgroundEffect onTouchStart={modalController.toggleModal}/>
            <S.ModalContainer>
                <S.Label>Nova Transação</S.Label>

                <S.Input
                    placeholder="Descrição"
                />
                <S.Input
                    placeholder="0,00"
                    keyboardType="number-pad"
                />
                <S.Hint>Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</S.Hint>

                <S.FakeInput onTouchStart={() => setShowDatePicker(true)}>
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
                    <S.ActionButton type="cancel"
                        onPress={modalController.toggleModal}
                    >
                        <S.ButtonText type="cancel">Cancelar</S.ButtonText>
                    </S.ActionButton>

                    <S.ActionButton type="confirm">
                        <S.ButtonText type="confirm">Salvar</S.ButtonText>
                    </S.ActionButton>

                </S.ActionButtons>
                
            </S.ModalContainer>
        </S.Container >
    )
}