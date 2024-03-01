import styles from './header.module.css'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
     <img className={styles.logo} width={120} height={50} src={Logo} alt="" />
    </header>
  )
}
