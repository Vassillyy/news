import {useEffect, useRef, useState} from 'react'
import {Layout, Typography, Badge, Flex} from 'antd'
import {DownOutlined, UpOutlined} from '@ant-design/icons'
import ListKeywords from './ListKeywords'
import FilterData from './FilterData'
import DuplicateData from './DuplicateData'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'

const {Content: AntContent} = Layout
const {Link} = Typography

const Content = ({article}: {article: Article}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'))
  const [displayedText, setDisplayedText] = useState<string>('')

  useEffect(() => {
    if (textRef.current) {
      const context: CanvasRenderingContext2D | null =
        canvasRef.current.getContext('2d')

      if (context) context.font = window.getComputedStyle(textRef.current).font
    }
  }, [article.highlights])

  useEffect(() => {
    setDisplayedText(getDisplayedText())
  }, [article.highlights, isExpanded])

  /** Функция для получения строки */
  const getDisplayedText = () => {
    const fullText: string = article.highlights.join('; ')
    if (isExpanded) return highlightKeywords(fullText)

    const words: string[] = fullText.split(' ')
    let line: string = ''
    let displayedText: string = ''
    let lineCount: number = 0

    if (textRef.current) {
      const maxWidth: number = textRef.current.clientWidth
      const context: CanvasRenderingContext2D | null =
        canvasRef.current.getContext('2d')

      if (context) {
        for (const word of words) {
          const testLine: string = line + word + ' '
          const metrics: TextMetrics = context.measureText(testLine)

          if (metrics.width > maxWidth && line) {
            lineCount++

            if (lineCount >= 3) break

            displayedText += line.trim() + '\n'
            line = word + ' '
          } else line = testLine
        }
      }

      if (line) displayedText += line.trim()
      if (words.length > displayedText.split(' ').length) displayedText += '...'
    }

    return highlightKeywords(displayedText.trim())
  }

  /** Функция для подсветки ключевых слов */
  const highlightKeywords = (text: string) => {
    const highlightedText: string[] = text.split(' ')

    article.keywords.forEach((keyword) => {
      for (let i = 0; i < highlightedText.length; i++) {
        const formettedStr = highlightedText[i].replace(/[.,]/g, '')
        if (
          (keyword.value.toUpperCase() !== keyword.value &&
            formettedStr
              .toLowerCase()
              .startsWith(keyword.value.toLowerCase().slice(0, -2))) ||
          formettedStr === keyword.value
        ) {
          console.warn(formettedStr, keyword.value)
          highlightedText[i] =
            `<span style="background-color: #1A7BBF; padding: 1px;border-radius: 5px">${highlightedText[i]}</span>`
        }
      }
    })

    return highlightedText.join(' ')
  }

  return (
    <AntContent className={styles.content}>
      <div
        ref={textRef}
        className={styles.content__mainText}
        dangerouslySetInnerHTML={{__html: displayedText}}
      />

      <Badge
        className={styles.content__button}
        onClick={setIsExpanded.bind(this, !isExpanded)}
      >
        {isExpanded ? 'Скрыть' : 'Показать все'}
        {isExpanded ? <UpOutlined /> : <DownOutlined />}
      </Badge>

      <ListKeywords keywords={article.keywords} />

      <Badge className={styles.content__link}>
        <Link href={article.link} target="_blank">
          Оригинальная ссылка
        </Link>
      </Badge>

      <FilterData duplicates={article.duplicates} />

      <DuplicateData article={article} />

      <Flex className={styles.content__footer} gap={8} justify="center">
        <DownOutlined className={styles.content__icon} />
        <Badge className={styles.content__bage}>Просмотр дубликатов</Badge>
      </Flex>
    </AntContent>
  )
}

export default Content
