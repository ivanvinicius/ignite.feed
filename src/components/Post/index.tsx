import styles from './styles.module.css'


const diegoPicture = 'https://github.com/diego3g.png'
const luizPicture = 'https://github.com/luizbatanero.png'
const josephPicture = 'https://github.com/josepholiveira.png'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header} >
        <div className={styles.author}>
          <img 
            src={diegoPicture} 
            alt="Foto de perfil do usuário" 
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Diego Schell Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime='2022-05-08 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form  className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixar comentário'/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}