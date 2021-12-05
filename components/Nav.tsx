import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {
    return (
      <nav className={styles.menu}>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/seiva">Seiva server</Link></li>
          <li><Link href="/autismo">Autismo</Link></li>
          <li><Link href="/conchaMeiggs">CDCM </Link></li>
          <li><Link href="/filosofia">Filosofia</Link></li>
        </ul>
      </nav>
    )
}

export default Nav