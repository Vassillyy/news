import {useState} from 'react'
import {Layout} from 'antd'
import Header from '@/components/header/Header'
import Content from '@/components/content/Content'
import {dataArticle} from '@/data/dataArticle'
import './styles.scss'

function App() {
  const [article, setArticle] = useState(dataArticle)

  return (
    <Layout className="app">
      <Header article={article} />
      <Content article={article} />
    </Layout>
  )
}

export default App
