import styles from './styles.module.css'

interface Props {
  src: string;
  hasBorder?: boolean
}

export function Avatar({src, hasBorder = true}: Props) {
  return (
    <img 
      src={src} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      alt="Image de perfil do usuário" 
    />
  )
}