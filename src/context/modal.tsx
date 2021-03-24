import React, {createContext, useState, useContext} from 'react'
import { ModalContext, ModalProviderProps } from '../typescript/types'

const Modal = createContext<ModalContext>({} as ModalContext)

export function ModalProvider({children}: ModalProviderProps){
    const [status, setStatus] = useState(false)

    function toggleModal(){
        setStatus(!status)
    }

    return (
        <Modal.Provider
            value={{
                status,
                modalController: {
                    toggleModal
                }
            }}
        >
            {children}
        </Modal.Provider>
    )
}

export function useModal(){
    const context = useContext(Modal)
    const {status, modalController} = context
    return {status, modalController}
}