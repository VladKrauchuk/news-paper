import format from 'date-fns/format'

export const formatDate = (date: string) => {
    return format(new Date(date), 'dd.MM • hh:mm')
}
