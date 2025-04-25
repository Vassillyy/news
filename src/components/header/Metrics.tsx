import {Typography, Flex, Space} from 'antd'
import {Article} from '@/data/Article.d'
import {getDate} from '@/components/helpers/getDate'
import styles from './styles.module.scss'

const {Text} = Typography

const Metrics = ({article}: {article: Article}) => {
  const {date, formattedMonth, numberPeople} = getDate(article)

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
