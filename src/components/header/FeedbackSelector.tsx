import {Flex, Typography, Tag} from 'antd'
import {InfoOutlined} from '@ant-design/icons'
import {useState} from 'react'
import styles from './styles.module.scss'

const {Text} = Typography

const FeedbackSelector = () => {
  const [isPositive, setStatus] = useState<boolean>(true)

  const changeStatus = (tag: boolean) => {
    if (isPositive === tag) return
    setStatus(tag)
  }

  return (
    <Flex gap="15px" align="center">
      <Tag color="springgreen">
        <Text className={styles.feedbackSelector__bage}>
          {isPositive ? 'Positive' : 'Negative'}
        </Text>
      </Tag>
      <Tag
        className={styles.feedbackSelector__checkbox}
        icon={
          isPositive ? (
            <InfoOutlined className={styles.feedbackSelector__icon} />
          ) : null
        }
        onClick={changeStatus.bind(this, true)}
      ></Tag>
      <Tag
        className={styles.feedbackSelector__checkbox}
        icon={
          !isPositive ? (
            <InfoOutlined className={styles.feedbackSelector__icon} />
          ) : null
        }
        onClick={changeStatus.bind(this, false)}
      ></Tag>
    </Flex>
  )
}

export default FeedbackSelector
