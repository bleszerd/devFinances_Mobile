import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>dev.finance$</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '35%',
        backgroundColor: '#22460a',
    },
    logo: {
        color: "#f0f2f5",
        fontWeight: 'bold',
        fontSize: 28,
    }
})