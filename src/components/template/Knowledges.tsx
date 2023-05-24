"use client";
import { useState } from "react";
import styles from "../../styles/Knowledges.module.css";

import {
  frontEndItems,
  backEndItems,
  KnowledgesItems,
} from "@/core/utils/data";
import MenuItems from "../MenuItems";
import View from "./View";
import ItemDetail from "../ItemDetail";

export default function Knowledges() {
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (index === 0) {
      return setCurrentItems(backEndItems);
    }
    if (index === 1) {
      return setCurrentItems(frontEndItems);
    }
    if (index === 2) {
      return setCurrentItems(KnowledgesItems);
    }
  };

  function showDetail() {
    return (
      <ItemDetail
        title={currentItem?.name}
        description={currentItem?.description}
      ></ItemDetail>
    );
  }

  function activeItem(item: any) {
    setActiveItemIndex(item.id);
    setCurrentItem(item);
    showDetail();
  }

  return (
    <div className={styles.knowledges}>
      <MenuItems
        handleClick={handleClick}
        option1="Back-end"
        option2="Front-end"
        option3="Conhecimentos"
      ></MenuItems>

      <div className={styles.content}>
        <ul className={styles.list}>
          {currentItems.length > 0 ? (
            currentItems.map((e: any) => (
              <li className={activeItemIndex === e.id ? styles.active : ""} key={e.id}
                onClick={() => activeItem(e)}>
                {e.name}
              </li>
            ))
          ) : (
            <p>Escolha uma das opções.</p>
          )}
        </ul>
        {currentItems.length > 0 && (
          <p className={styles.notice}>! Clique em algum para mais detalhes(Somente PC).</p>
        )}
      </div>
      {currentItem !== null ? showDetail() : ""}
    </div>
  );
}
