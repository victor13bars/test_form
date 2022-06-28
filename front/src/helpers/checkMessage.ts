export const checkMessage = (value: string) => {
    if (value.length < 10) return 'Минимальная длина 10 символов'
    if (value.length > 300) return ' Максимальная длина 300 символов'
    else return ''
}