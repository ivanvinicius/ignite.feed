import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

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
  const longPublishedAt = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedAtDistaceFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  
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
        <time title={longPublishedAt} dateTime={publishedAt.toISOString()}>{publishedAtDistaceFromNow}</time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        if(line.type === 'paragraph') {
          return <p>{line.content}</p>
        }
        else if(line.type === 'link') {
          return <p><a href="#">{line.content}</a></p>
        }
       })}
      </div>

      <form  className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixar comentário'/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}