import styles from './styles.module.css'

interface Props {
  author: string
  content: string
}

export function Post({author, content}:Props) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}