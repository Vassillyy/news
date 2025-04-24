import {Layout, Typography, Badge} from 'antd'
import {DownOutlined, UpOutlined} from '@ant-design/icons'
import {Article} from '@/data/Article.d'
import styles from './styles.module.scss'
import {useEffect, useRef, useState} from 'react'

const {Content: AntContent} = Layout
const {Paragraph} = Typography

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
    if (isExpanded) return fullText

    const words: string[] = fullText.split(' ')
    let line: string = ''
    let displayedText: string = ''
    let lineCount: number = 0

    if (textRef.current) {
      const maxWidth: number = textRef.current.clientWidth

      for (const word of words) {
        const testLine: string = line + word + ' '
        const metrics: TextMetrics = canvasRef.current
          .getContext('2d')
          .measureText(testLine)

        if (metrics.width > maxWidth && line) {
          lineCount++

          if (lineCount >= 3) break

          displayedText += line.trim() + '\n'
          line = word + ' '
        } else line = testLine
      }

      if (line) displayedText += line.trim()

      if (words.length > displayedText.split(' ').length) displayedText += '...'
    }

    return displayedText.trim()
  }

  return (
    <AntContent className={styles.content}>
      <Paragraph ref={textRef} className={styles.content__mainText}>
        {displayedText}
      </Paragraph>
      <Badge
        className={styles.content__button}
        onClick={setIsExpanded.bind(this, !isExpanded)}
      >
        {isExpanded ? 'Скрыть' : 'Показать все'}
        {isExpanded ? <UpOutlined /> : <DownOutlined />}
      </Badge>
    </AntContent>
  )
}

export default Content
