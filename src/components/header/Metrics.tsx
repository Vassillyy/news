import {Typography, Flex, Space} from 'antd'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'

const {Text} = Typography

const Metrics = ({article}: {article: Article}) => {
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

  return (
    <Space size={20}>
      <Flex gap={5}>
        <Text className={styles.metrics__item_value}>{date.getDate()}</Text>
        <Text className={styles.metrics__item_label}>
          {formattedMonth + ' ' + date.getFullYear()}
        </Text>
      </Flex>

      <Flex gap={5}>
        <Text className={styles.metrics__item_value}>
          {numberPeople > 1 ? numberPeople + 'К' : article.reach}
        </Text>
        <Text className={styles.metrics__item_label}>Аудитория</Text>
      </Flex>

      <Flex gap={5}>
        <Text className={styles.metrics__item_label}>Трафик лидеров:</Text>
        {article.traffic
          .sort((a, b) => b.count - a.count)
          .map((item, index) => (
            <Flex key={index} gap={5}>
              <Text className={styles.metrics__item_label}>{item.value}</Text>
              <Text className={styles.metrics__item_value}>
                {(item.count * 100).toFixed(0)}%
              </Text>
            </Flex>
          ))}
      </Flex>
    </Space>
  )
}

export default Metrics
