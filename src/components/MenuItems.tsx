"use client";

import { useState } from "react";
import styles from "../styles/MenuItems.module.css";


interface MenuItemsProps{
  handleClick?: (e:any)=> void
  option1?:string
  option2?:string
  option3?:string
}


export default function MenuItems(props:MenuItemsProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={styles.options}>
      <ul>
        <li
          className={activeIndex === 0 ? styles.active : ""}
          onClick={() => { setActiveIndex(0);props.handleClick?.(0);}}
        >
          {props.option1}
        </li>
        <li
          className={activeIndex === 1 ? styles.active : ""}
          onClick={() => { setActiveIndex(1);props.handleClick?.(1);}}
        >
          {props.option2}
        </li>
        <li
          className={activeIndex === 2 ? styles.active : ""}
          onClick={() => { setActiveIndex(2);props.handleClick?.(2);}}
        >
          {props.option3}
        </li>
      </ul>
    </div>
  );
}
