import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import Routes from './src/routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/styles/theme.style'
import { ModalProvider } from './src/context/modal'
import TransactionProvider from './src/context/transactions'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider
        theme={defaultTheme}
      >
        <StatusBar
          hidden={true}
        />
        <TransactionProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </TransactionProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}