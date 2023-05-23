"use client";
import { useState } from "react";
import styles from "../../styles/Experiences.module.css";

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.experiences}>
      <div className={styles.options}>
        <ul>
        <li
        className={activeIndex === 0 ? styles.active : ''}
        onClick={() => handleClick(0)}
      >
        Back-end
      </li>
      <li
        className={activeIndex === 1 ? styles.active : ''}
        onClick={() => handleClick(1)}
      >
        Front-end
      </li>
      <li
        className={activeIndex === 2 ? styles.active : ''}
        onClick={() => handleClick(2)}
      >
        Conhecimentos
      </li>
        </ul>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}
