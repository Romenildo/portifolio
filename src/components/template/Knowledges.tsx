import styles from "../../styles/Knowledges.module.css";

export default function Knowledges() {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <section>
      <div className={styles.clock}>
        {numbers.map((number) => (
          <div key={number} className={styles.number}>
            {number}
          </div>
        ))}
      </div>
    </section>
  );
}
