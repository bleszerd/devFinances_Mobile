function parseDateToLocal(date: Date){
    const splitedDate = date.toLocaleDateString().split('/')
    const finalDate = `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`

    return finalDate
}

export {
    parseDateToLocal
}