import {Article} from '@/data/Article.d'

export const getDate = (article: Article) => {
  /** Дата статьи, преобразованная в объект Date */
  const date = new Date(article.date)
  /** Сокращенное название месяца на русском языке */
  const month: string = new Intl.DateTimeFormat('ru-RU', {
    month: 'short'
  }).format(date)
  /** Название месяца с заглавной буквы и без точки */
  const formattedMonth: string =
    month.charAt(0).toUpperCase() + month.slice(1).replace('.', '')
  /** Количество людей, прочитавших статью, в тысячах */
  const numberPeople: number = article.reach / 1000

  return {date, formattedMonth, numberPeople}
}
