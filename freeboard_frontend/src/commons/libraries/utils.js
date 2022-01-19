export const getMyDate = (myDate) => {
    const aaa = new Date(myDate)
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    return `${yyyy}-${mm}-${dd}`
}