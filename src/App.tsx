import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './styles/app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Schell Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('Tue Aug 16 2022 16:07:13 GMT-0300 (Brasilia Standard Time)'),
  },
  {  
    id: 2,
    author: {
      avatarUrl: 'https://github.com/josepholiveira.png',
      name: 'Joseph Oliveira',
      role: 'Community Experience @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/ambar'},
    ],
    publishedAt: new Date('Tue Aug 16 2022 08:06:13 GMT-0300'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(({id, author, content, publishedAt}) => (
              <Post 
                key={id} 
                author={author} 
                content={content} 
                publishedAt={publishedAt}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}


