import {useState} from 'react'
import {Layout} from 'antd'
import Header from '@/components/header/Header'
import {dataArticle} from '@/data/dataArticle'
import './styles.scss'

const {Content, Footer} = Layout

function App() {
  const [article, setArticle] = useState(dataArticle)

  return (
    <Layout className="app">
      <Header article={article} />
      {/*<Content*/}
      {/*  style={{*/}
      {/*    color: 'white',*/}
      {/*    backgroundColor: '#001529',*/}
      {/*    borderRight: '1px solid white',*/}
      {/*    borderLeft: '1px solid white',*/}
      {/*    margin: '0 20px 0 20px'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <h2>Welcome to the dark side!</h2>*/}
      {/*  <p>*/}
      {/*    This is a simple example of using Ant Design with a dark background.*/}
      {/*  </p>*/}
      {/*</Content>*/}
      {/*<Footer*/}
      {/*  style={{*/}
      {/*    textAlign: 'center',*/}
      {/*    backgroundColor: '#001529',*/}
      {/*    color: 'white',*/}
      {/*    margin: '0 20px 15px 20px',*/}
      {/*    border: '1px solid white',*/}
      {/*    borderTop: 'none',*/}
      {/*    borderRadius: '0 0 8px 8px'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Ant Design ©2023 Created by Your Name*/}
      {/*</Footer>*/}
    </Layout>
  )
}

export default App
