import {Layout, Flex, Typography} from 'antd'
import Metrics from './Metrics'
import FeedbackSelector from './FeedbackSelector'
import styles from './styles.module.scss'

const {Header: AntHeader} = Layout
const {Title} = Typography

const Header = () => {
  return (
    <AntHeader className={styles.header}>
      <Flex justify="space-between">
        <Metrics />
        <FeedbackSelector />
      </Flex>
      <Title className={styles.header__title} level={3}>
        Mobile bankers left vulnerable: 47% of UK consumers manage finances on
        insecure smartphones
      </Title>
    </AntHeader>
  )
}

export default Header
