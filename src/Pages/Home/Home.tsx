import QRScanner from "../QRScanner"
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.Wrapper}>

      <QRScanner />
    </div>
  )
}