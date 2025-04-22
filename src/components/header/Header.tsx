import {Layout, Flex} from 'antd'
import Metrics from './Metrics'
import FeedbackSelector from './FeedbackSelector'
import styles from './styles.module.scss'

const {Header: AntHeader} = Layout

const Header = () => {
  return (
    <AntHeader className={styles.header}>
      <Flex justify="space-between">
        <Metrics />
        <FeedbackSelector />
      </Flex>
    </AntHeader>
  )
}

export default Header
