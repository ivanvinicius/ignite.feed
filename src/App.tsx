import { Header } from './components/Header'

import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './styles/app.module.css'

import './styles/global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ivan" content="Os temas descritos da cultura alemã"/>
          <Post author="Diego" content="Tudo sobre os hooks avançados do React"/>

        </main>
      </div>
    </>
  )
}


