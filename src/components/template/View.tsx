
import styles from '../../styles/View.module.css'



interface ViewProps{
  title: string
  children:any
}
export default function View(props:ViewProps) {
    return (
     <div className={styles.header}>
        <div className={styles.title}>
          <div> {props.title}</div>
          <div>x</div>
        </div>
        <div className={styles.content}> 
          <div className={styles.item}>
            {props.children}
          </div>
          <div className={styles.footer}></div>
            
        </div>

     </div>
    )
  }
  