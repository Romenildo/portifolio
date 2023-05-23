
import styles from '../../styles/Navbar.module.css'

export default function NavBar() {
    return (
     <nav className={styles.navbar}>
        
        <ul>
        <div className={styles.logo}>
          <a href="#"> RF </a>
        </div>
          <li>Início</li>
          <li>Sobre</li>
          <li>Experiência</li>
          <li>Projetos</li>
        </ul>

        <p>Romenildo Ferreira</p>
      </nav>
    )
  }
  