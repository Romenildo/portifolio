import styles from "../styles/ItemExperience.module.css";

interface ItemExperienceProps {
  title: string;
  period: string;
  description: string;
  detail: string;
}

export default function ItemExperience(props: ItemExperienceProps) {
  return (
    <div>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <p >{props.period}</p>
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.detail}>{props.detail}</div>
    </div>
  );
}
