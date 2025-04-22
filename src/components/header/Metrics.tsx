import {Typography, Flex, Space} from 'antd'
import styles from './styles.module.scss'

const {Text} = Typography

const Metrics = () => {
  return (
    <Space size={20}>
      <Flex gap="5px">
        <Text className={styles.metrics__item_value}>18</Text>
        <Text className={styles.metrics__item_label}>Jun 2024</Text>
      </Flex>

      <Flex gap="5px">
        <Text className={styles.metrics__item_value}>211K</Text>
        <Text className={styles.metrics__item_label}>Reach</Text>
      </Flex>

      <Flex gap="5px">
        <Text className={styles.metrics__item_label}>Top Traffic:</Text>
        <Flex gap="5px">
          <Text className={styles.metrics__item_label}>Austria</Text>
          <Text className={styles.metrics__item_value}>38%</Text>
        </Flex>
        <Flex gap="5px">
          <Text className={styles.metrics__item_label}>USA</Text>
          <Text className={styles.metrics__item_value}>12%</Text>
        </Flex>
        <Flex gap="5px">
          <Text className={styles.metrics__item_label}>Italian</Text>
          <Text className={styles.metrics__item_value}>8%</Text>
        </Flex>
      </Flex>
    </Space>
  )
}

export default Metrics
