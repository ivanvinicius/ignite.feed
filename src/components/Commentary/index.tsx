import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'

import styles from './styles.module.css'

interface Props {
  commentary: string
}

export function Commentary ({ commentary }: Props) {
  return (
    <section className={styles.commentary}>
      <Avatar src={'https://github.com/luizbatanero.png'} hasBorder={false}/>

      <div className={styles.commentaryBox}>
        <div className={styles.commentaryContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Batanero</strong>
              <time title="11 de maio às 08:13h" dateTime='2022-05-08 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{commentary}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </section>
  )
} 