"use client";
import { useState } from "react";
import styles from "../../styles/Experiences.module.css";

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index:number) => {
    setActiveIndex(index);
  };

  const know = [{
    id:1,
    name: "nodeJS",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:2,
    name: "ReactJS",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:3,
    name: "nextJS",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:4,
    name: "Typescrypt",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:5,
    name: "Mongodb",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:6,
    name: "SQL SERVER",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:7,
    name: "github",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:8,
    name: "git",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:9,
    name: "Express",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:10,
    name: "angular",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:11,
    name: "vue.js",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:12,
    name: "docker-copmopse",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  },
  {
    id:13,
    name: "...",
    description:"O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis"
  }]

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
        { know.map((e:any)=>(
          <li className={activeIndex === e.id ? styles.active : ''} key={e.id} onClick={() => handleClick(e.id)}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
