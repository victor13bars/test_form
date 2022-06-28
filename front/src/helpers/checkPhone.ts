export const checkPhone = (value: string) => {
    let array = value.split(' ')
    let subarray = array[2]?.split('-')
    if (
        value.startsWith('+7 ')
        && array.length === 3
        && !isNaN(+array[1])
        && subarray.length === 3
        && !isNaN(+subarray[0])
        && !isNaN(+subarray[1])
        && !isNaN(+subarray[2])
        && value.length === 16
    ) {
        return ''
    } else {
        return 'Не верный формат номера'
    }
}