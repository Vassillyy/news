import {Layout, Flex, Typography} from 'antd'
import Metrics from './Metrics'
import SentimentSelector from './SentimentSelector'
import ProfileSettings from './ProfileSettings'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'

const {Header: AntHeader} = Layout
const {Title} = Typography

const Header = ({article}: {article: Article}) => {
  return (
    <AntHeader className={styles.header}>
      <Flex justify="space-between">
        <Metrics article={article} />
        <SentimentSelector sentiment={article.sentiment} />
      </Flex>

      <Title className={styles.header__title} level={3}>
        {article.title}
      </Title>

      <ProfileSettings article={article} />
    </AntHeader>
  )
}

export default Header
