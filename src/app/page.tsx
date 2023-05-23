"use client";

import About from "@/components/template/About";
import Experiences from "@/components/template/Experiences";
import Footer from "@/components/template/Footer";
import Knowledges from "@/components/template/Knowledges";
import NavBar from "@/components/template/NavBar";

import styles from "./page.module.css";
import View from "@/components/template/View";
import { useState } from "react";
import Project from "@/components/template/Project";

export default function Home() {
  const [content, setContent] = useState("");
  function onchange(typeContent:string) {
    setContent(typeContent)
  }

  function renderContent() {
    switch (content) {
      case "projects":
        return (
          <View title="Projetos">
            <Project></Project>
          </View>
        );
      case "about":
        return (
          <View title="Sobre">
            <About></About>
          </View>
        );
      case "knowledges":
        return (
          <View title="Conhecimentos">
            <Knowledges></Knowledges>
          </View>
        );
      case "experiences":
        return (
          <View title="Experiências">
            <Experiences></Experiences>
          </View>
        );
        default:
          return false
    }
  }

  return (
    <main>
      <NavBar onChange={onchange}></NavBar>
      {renderContent()}
    </main>
  );
}
