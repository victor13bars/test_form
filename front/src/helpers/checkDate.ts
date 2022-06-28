export const checkDate = (value: string) => {
    let date = new Date()
    if (new Date(value).getTime() > +date) return 'Выбранная дата больше текущей'
    else return ''
}