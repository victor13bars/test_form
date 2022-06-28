export const checkNameAndSurname = (value: string) => {
    let name = value.split(' ')[0].toString()

    if (value.split(' ').length === 2) {
        let surname = value.split(' ')[1]?.toString()
        if (!/^[a-z]*$/i.test(name)) return 'Используйте латинские буквы'
        if (name.length < 3) return 'Минимальная длина имени 3 символа'
        if (name.length > 30) return 'Максимальная длинна имени 30 символов'
        if (surname.length < 3) return 'Минимальная длина фамилии 3 символа'
        if (!/^[a-z]*$/i.test(surname)) return 'Используйте латинские буквы'
        if (surname.length > 30) return 'Максимальная длинна фамилии 30 символов'
        else return ''
    } else {
        if (!/^[a-z]*$/i.test(name)) return 'Используйте латинские буквы'
        if (name.length < 3) return 'Минимальная длина имени 3 символа'
        if (value.split(' ').length > 2) return 'Используй один пробел'
        if (name.length > 30) return 'Максимальная длинна имени 30 символов'
        else return ''
    }
}