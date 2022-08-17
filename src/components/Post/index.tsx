import { useState, FormEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Commentary } from '../Commentary'

import styles from './styles.module.css'

interface AuthorData {
  avatarUrl: string
  name: string
  role: string
}

interface ContentData {
  type: string
  content: string
}

interface Props {
  author: AuthorData
  content: ContentData[]
  publishedAt: Date
}

export function Post({author, content, publishedAt}: Props) {
  const [commentaries, setCommentaries] = useState(['Caraca, muito massa!'])
  const [textAreaValue, setTextAreaValue] = useState('')

  const longPublishedAt = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedAtDistaceFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


  function handleCreateNewCommentary(event: FormEvent) {
    event.preventDefault()
    setCommentaries(oldState => [...oldState, textAreaValue])
    setTextAreaValue('')
  }
  
  return (
    <article className={styles.post}>
      <header className={styles.header} >
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={longPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedAtDistaceFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({type, content}) => {
            if(type === 'paragraph') return <p key={content}>{content}</p>
            if(type === 'link') return <p key={content}><a href="#">{content}</a></p>
          }
        )}
      </div>

      <form onSubmit={handleCreateNewCommentary} className={styles.commentaryForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixar comentário'
          value={textAreaValue}
          onChange={e => setTextAreaValue(e.target.value)}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentaryList}>
        {commentaries.map(commentary => (
          <Commentary key={commentary} commentary={commentary} />
        ))}
      </div>
    </article>
  )
}