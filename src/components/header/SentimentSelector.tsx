import {Flex, Typography, Tag} from 'antd'
import {InfoOutlined} from '@ant-design/icons'
import styles from './styles.module.scss'

const {Text} = Typography

const SentimentSelector = ({sentiment}: {sentiment: string}) => {
  return (
    <Flex gap={15} align="center">
      <Tag color="springgreen">
        <Text className={styles.feedbackSelector__bage}>{sentiment}</Text>
      </Tag>

      <Tag
        className={styles.feedbackSelector__checkbox}
        icon={<InfoOutlined className={styles.feedbackSelector__icon} />}
      ></Tag>

      <Tag className={styles.feedbackSelector__checkbox}></Tag>
    </Flex>
  )
}

export default SentimentSelector
