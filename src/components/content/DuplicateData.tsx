import {Typography, Flex} from 'antd'
import {Article} from '@/data/Article.d'
import DuplicationMetrics from './DuplicationMetrics'
import DuplicationProfileSettings from './DuplicationProfileSettings'
import styles from './styles.module.scss'

const {Title} = Typography

const DuplicateData = ({article}: {article: Article}) => {
  return (
    <Flex className={styles.duplicationData} vertical gap={5}>
      <DuplicationMetrics article={article} />

      <Title className={styles.duplicationData__title} level={3}>
        {article.title}
      </Title>

      <DuplicationProfileSettings article={article} />
    </Flex>
  )
}

export default DuplicateData
