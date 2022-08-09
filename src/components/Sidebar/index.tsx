import { PencilLine } from 'phosphor-react'

import styles from './styles.module.css'

const cover = 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=50'
const githubProfile = 'https://github.com/ivanvinicius.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={cover} alt="Capa do usuário" />

      <div className={styles.profile}>
        <img 
          src={githubProfile} 
          alt="Image de perfil do usuário" 
          className={styles.avatar}  
        />
        <strong>Ivan Vinicius</strong>
        <span>ReactJS Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}