export const getToday = () => {

    const year = new Date().getFullYear().toString().slice(2)
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()

    return (`${year}/${month}/${day}`)

}