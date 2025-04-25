import React, {JSX} from 'react'
import {Badge, Flex, Typography} from 'antd'
import {
  ShareAltOutlined,
  TrophyOutlined,
  CloudOutlined
} from '@ant-design/icons'
import styles from './styles.module.scss'

const {Text} = Typography

type Keyword = {
  value: string
  icon?: string
  count: number
}

type Icon = {
  label: string
  html: JSX.Element
}

const lestIcons: Icon[] = [
  {
    label: 'station',
    html: <ShareAltOutlined />
  },
  {
    label: 'flag',
    html: <TrophyOutlined />
  },
  {
    label: 'orbit',
    html: <CloudOutlined />
  }
]

const ListKeywords = ({keywords}: {keywords: Keyword[]}) => {
  return (
    <Flex className={styles.listKeywords} gap={10}>
      {keywords
        .sort((a, b) => b.count - a.count)
        .map((keyword, index) => {
          const itemIcon: Icon | undefined = keyword.icon
            ? lestIcons.find((el) => el.label === keyword.icon)
            : undefined

          return (
            <Badge className={styles.listKeywords__dage} key={index}>
              {itemIcon
                ? React.cloneElement(itemIcon.html, {
                    className: styles.listKeywords__icon
                  })
                : null}
              <Text className={styles.listKeywords__label}>
                {keyword.value}
              </Text>
              <Text className={styles.listKeywords__value}>
                {keyword.count}
              </Text>
            </Badge>
          )
        })}
    </Flex>
  )
}

export default ListKeywords
