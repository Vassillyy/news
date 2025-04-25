import {Flex, Tag, Typography} from 'antd'
import {InfoOutlined} from '@ant-design/icons'
import {getDate} from '@/components/helpers/getDate'
import {Article} from '@/data/Article'
import styles from './styles.module.scss'

const {Text} = Typography

const DuplicationMetrics = ({article}: {article: Article}) => {
  const {date, formattedMonth, numberPeople} = getDate(article)

  return (
    <Flex className={styles.duplicationDataMetrics} justify="space-between">
      <Flex gap={15}>
        <Flex gap={5}>
          <Text className={styles.duplicationDataMetrics__item_data}>
            {date.getDate()}
          </Text>
          <Text className={styles.duplicationDataMetrics__item_data}>
            {formattedMonth + ' ' + date.getFullYear()}
          </Text>
        </Flex>

        <Flex gap={5}>
          <Text className={styles.duplicationDataMetrics__item_reach}>
            {numberPeople > 1 ? numberPeople + 'К' : article.reach}
          </Text>
          <Text className={styles.duplicationDataMetrics__item_reach}>
            Топ Аудитория
          </Text>
        </Flex>
      </Flex>

      <Flex gap={15} align="center">
        <Tag
          className={styles.duplicationDataMetrics__checkbox}
          icon={
            <InfoOutlined className={styles.duplicationDataMetrics__icon} />
          }
        ></Tag>

        <Tag className={styles.duplicationDataMetrics__checkbox}></Tag>
      </Flex>
    </Flex>
  )
}

export default DuplicationMetrics
