"use client";
import { useState } from "react";
import styles from "../../styles/Experiences.module.css";

import { frontEndItems, backEndItems, KnowledgesItems } from "@/core/utils/date";


export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentItems, setCurrentItems] = useState<any>([])

  const handleClick = (index:number) => {
    setActiveIndex(index);
    if(index === 0){
      return setCurrentItems(backEndItems)
    }
    if(index === 1){
      return setCurrentItems(frontEndItems)
    }
    if(index === 2){
      return setCurrentItems(KnowledgesItems)
    }
  }

  

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

      <ul className={styles.content}>
        { currentItems.length > 0 ?(
          currentItems.map((e:any)=>(
            <li className={activeIndex === e.id ? styles.active : ''} key={e.id} onClick={() => handleClick(e.id)}>{e.name}</li>
          ))
        ):(
          <p>Escolha uma das opções.</p>
        )
        
        }
      </ul>
    </div>
  );
}
