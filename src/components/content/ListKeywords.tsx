import React, {JSX, useEffect, useRef, useState} from 'react'
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
  const badgeRefs = useRef<(HTMLSpanElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visibleKeywords, setVisibleKeywords] = useState<Keyword[]>(keywords)

  /** Меняем количество видимых ключевых слов */
  const changeVisibilityKeywords = () => {
    if (containerRef.current) {
      const containerWidth: number =
        containerRef.current.getBoundingClientRect().width
      const widths: number[] = badgeRefs.current.map(
        (badge) => badge?.getBoundingClientRect().width || 0
      )

      let cumulativeWidth: number = 0
      const visible: Keyword[] = []

      for (let i = 0; i < widths.length; i++) {
        cumulativeWidth += widths[i]
        if (cumulativeWidth <= containerWidth - 200) {
          visible.push(keywords[i])
        } else break
      }

      setVisibleKeywords(visible)
    }
  }

  useEffect(() => {
    changeVisibilityKeywords()
  }, [keywords])

  return (
    <Flex ref={containerRef} className={styles.listKeywords} gap={10}>
      {visibleKeywords
        .sort((a, b) => b.count - a.count)
        .map((keyword, index) => {
          const itemIcon: Icon | undefined = keyword.icon
            ? lestIcons.find((el) => el.label === keyword.icon)
            : undefined

          return (
            <Badge
              ref={(el) => {
                badgeRefs.current[index] = el
              }}
              className={styles.listKeywords__dage}
              key={index}
            >
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

      <button
        className={styles.listKeywords__button}
        onClick={changeVisibilityKeywords}
      >
        {keywords.length > visibleKeywords.length
          ? `Показать все +${keywords.length - visibleKeywords.length}`
          : 'Скрыть'}
      </button>
    </Flex>
  )
}

export default ListKeywords
