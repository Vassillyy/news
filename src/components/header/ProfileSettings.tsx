import {Flex, Typography, Image} from 'antd'
import {GlobalOutlined, ReadOutlined, UserOutlined} from '@ant-design/icons'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'

const {Text, Link} = Typography

const ProfileSettings = ({article}: {article: Article}) => {
  return (
    <Flex gap={20}>
      <Flex gap={5}>
        <GlobalOutlined className={styles.profileSettings__icon} />
        <Link
          className={styles.profileSettings__email}
          href={article.link}
          target="_blank"
        >
          {article.domain}
        </Link>
      </Flex>

      <Flex gap={5}>
        <Image
          className={styles.profileSettings__icon}
          src={article.fav}
          preview={false}
          width={20}
        />
        <Text className={styles.profileSettings__info} strong>
          {article.country}
        </Text>
      </Flex>

      <Flex gap={5}>
        <ReadOutlined className={styles.profileSettings__icon} />
        <Text className={styles.profileSettings__info} strong>
          {article.lang.charAt(0).toUpperCase() + article.lang.slice(1)}
        </Text>
      </Flex>

      <Flex gap={5}>
        <UserOutlined className={styles.profileSettings__icon} />
        <Text className={styles.profileSettings__info} strong>
          {article.author.length > 2
            ? article.author.slice(0, 3).join(', ') + ' и другие.'
            : article.author.join(', ')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileSettings
