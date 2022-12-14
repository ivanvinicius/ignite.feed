import { useState } from 'react'
import { HandsClapping, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'
import styles from './styles.module.css'

interface Props {
  commentary: string
  onDeleteCommentary: (commentary: string) => void
}

export function Commentary ({ commentary, onDeleteCommentary }: Props) {
  const [applaudCount, setApplaudCount] = useState(0)

  function handleApplaudCommentary() {
    setApplaudCount(currentState => currentState + 1)
  }

  function handleDeleteCommentary() {
    onDeleteCommentary(commentary)
  }

  return (
    <section className={styles.commentary}>
      <Avatar src={'https://github.com/luizbatanero.png'} hasBorder={false}/>

      <div className={styles.commentaryBox}>
        <div className={styles.commentaryContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Batanero</strong>
              <time title="11 de maio às 08:13h" dateTime='2022-05-08 08:13:30'>
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteCommentary}>
              <Trash size={24} />
            </button>
          </header>
          <p>{commentary}</p>
        </div>

        <footer>
          <button onClick={handleApplaudCommentary}>
            <HandsClapping  />
            Aplaudir <span>{applaudCount}</span>
          </button>
        </footer>
      </div>
    </section>
  )
} 