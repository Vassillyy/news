import {Flex, Image, Typography} from 'antd'
import {GlobalOutlined, UserOutlined} from '@ant-design/icons'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'

const {Text} = Typography

const DuplicationProfileSettings = ({article}: {article: Article}) => {
  return (
    <Flex gap={20}>
      <Flex gap={5}>
        <GlobalOutlined className={styles.duplicationProfileSettings__icon} />
        <Text className={styles.duplicationProfileSettings__domain}>
          {article.domain}
        </Text>
      </Flex>

      <Flex gap={5}>
        <Image
          className={styles.duplicationProfileSettings__icon}
          src={article.fav}
          preview={false}
          width={20}
        />
        <Text className={styles.duplicationProfileSettings__info} strong>
          {article.country}
        </Text>
      </Flex>

      <Flex gap={5}>
        <UserOutlined className={styles.duplicationProfileSettings__icon} />
        <Text className={styles.duplicationProfileSettings__info} strong>
          {article.author.length > 2
            ? article.author.slice(0, 3).join(', ') + ' и другие.'
            : article.author.join(', ')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default DuplicationProfileSettings
