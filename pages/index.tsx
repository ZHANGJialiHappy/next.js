import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href = "/about"> About </Link>
      <h1> Hi </h1>
    </div>
  )
}
