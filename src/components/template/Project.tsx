
import styles from '../../styles/Project.module.css'

export default function Project() {
    return (
      <div className={styles.content}>
        <div className={styles.projects}>

            <a className={styles.project} href='https://github.com/Romenildo/admin-template' target='_blank'>
                <img src="/imgs/projects/adminTemplate.png" alt="ee" />
                <p>Admin-Template</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/Livroteria' target='_blank'>
                <img src="/imgs/projects/livroteria.png" alt="ee" />
                <p>Livroteria</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/ng-rodoviaria' target='_blank'>
                <img src="/imgs/projects/rodoviaria.png" alt="ee" />
                <p>Controle Rodoviária</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/quiz-app' target='_blank'>
                <img src="/imgs/projects/quiz.png" alt="ee" />
                <p>Quiz</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/pet-front' target='_blank'>
                <img src="/imgs/projects/pet.png" alt="ee" />
                <p>Controle adoção</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/next-crud-firebase' target='_blank'>
                <img src="/imgs/projects/crudClientes.png" alt="ee" />
                <p>CRUD Clientes</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/ddtank-wheel' target='_blank'>
                <img src="/imgs/projects/ddtank.png" alt="ee" />
                <p>Roleta ddtank</p>
            </a>
            <a className={styles.project} href='https://github.com/Romenildo/Batalha-Naval' target='_blank'>
                <img src="/imgs/projects/batalhaNaval.png" alt="ee" />
                <p>Batalha Naval</p>
            </a>
            
            
        </div>
          <p className={styles.notice}>! Ao clicar abrirá uma nova página no github com mais detalhes sobre o projeto.</p>
      </div>
    )
  }
  