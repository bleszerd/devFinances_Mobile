import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeAsyncData(data: any, name: string) {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data))
    } catch (err) {
        console.log(err);
    }
}

async function getAsyncData(name: string) {
    try {
        const recoveredData = await AsyncStorage.getItem(name)
        if (!!recoveredData) {
            const parsedTransactions = JSON.parse(recoveredData)
            return parsedTransactions
        }
    } catch (err) {
        console.log(err);
    }
}

export {
    storeAsyncData,
    getAsyncData
}