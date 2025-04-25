import {Flex, Typography} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import styles from './styles.module.scss'

const {Text} = Typography

const FilterData = ({duplicates}: {duplicates: number}) => {
  return (
    <Flex justify="space-between">
      <Flex gap={5}>
        <Text className={styles.filterData__label}>Дубликаты:</Text>
        <Text className={styles.filterData__value}>{duplicates}</Text>
      </Flex>

      <Flex className={styles.filterData__item} gap={10}>
        <Text className={styles.filterData__label}>По значимости</Text>
        <DownOutlined className={styles.filterData__icon} />
      </Flex>
    </Flex>
  )
}

export default FilterData
