
import styles from '../../styles/Navbar.module.css'

export default function NavBar() {
    return (
     <nav className={styles.navbar}>
        <div>
          <a href="#"> RF </a>
        </div>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Experiência</li>
          <li>Projetos</li>
        </ul>
      </nav>
    )
  }
  