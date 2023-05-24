"use client";
import { useState } from "react";
import styles from "../../styles/Experiences.module.css";
import ItemExperience from "../ItemExperience";
import MenuItems from "../MenuItems";

import { experiences } from "@/core/utils/dataExperience";

export default function Experiences() {
  const [currentExp, setCurrentExp] = useState<any>(null);

  const handleClick = (index: number) => {
    setCurrentExp(experiences[index]);
  };

  return (
    <div className={styles.experiences}>
      <MenuItems
        handleClick={handleClick}
        option1="---"
        option2="Nutes"
        option3="Universidade"
      ></MenuItems>
      
      <div className={styles.content}>
        {currentExp !== null ? (
          <ItemExperience
            title={currentExp?.title}
            period={currentExp?.period}
            description={currentExp?.description}
            detail={currentExp?.detail}
          ></ItemExperience>
        ) : (
          <p>Escolha uma das opções.</p>
        )}
      </div>
    </div>
  );
}
