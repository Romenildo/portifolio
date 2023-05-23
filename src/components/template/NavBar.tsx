
import styles from '../../styles/Navbar.module.css'

interface NavBarProps{
  onChange: (e:any)=> void
}


export default function NavBar(props:NavBarProps) {
    return (
     <nav className={styles.navbar}>
        
        <ul>
        <div className={styles.logo}>
          <a href="#"> RF </a>
        </div>
          <li onClick={()=>props.onChange("about")}>Sobre</li>
          <li onClick={()=>props.onChange("knowledges")}>Conhecimentos</li>
          <li onClick={()=>props.onChange("projects")}>Projetos</li>
          <li onClick={()=>props.onChange("experiences")}>Experiências</li>
        </ul>

        <p>Romenildo Ferreira</p>
      </nav>
    )
  }
  