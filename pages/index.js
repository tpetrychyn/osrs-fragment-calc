import styles from '../styles/Home.module.css'
import Calculator from './calculator'

export default function Home() {
  return (
    <div className={styles.container}>
      <Calculator/>
    </div>
  )
}
