
import styles from "../../styles/Experiences.module.css";
import MenuItems from "../MenuItems";

export default function Experiences() {
  return (
    <div className={styles.experiences}>

      <MenuItems  option1="---" option2="Nutes" option3="Universidade"></MenuItems>

      <div className={styles.content}>
        Atual
      </div>
    </div>
  )
}
