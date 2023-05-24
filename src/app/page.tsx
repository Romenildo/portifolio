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
  const [isVisible, setIsVisible] = useState(true)

  function onchange(typeContent:string) {
    setIsVisible(true)
    setContent(typeContent)
  }

  function renderContent() {
    switch (content) {
      case "projects":
        return (
          <View isVisible={isVisible} setVisible={setIsVisible} title="Projetos">
            <Project></Project>
          </View>
        );
      case "about":
        return (
          <View isVisible={isVisible} setVisible={setIsVisible}  title="Sobre">
            <About></About>
          </View>
        );
      case "knowledges":
        return (
          <View isVisible={isVisible} setVisible={setIsVisible}  title="Conhecimentos">
            <Knowledges></Knowledges>
          </View>
        );
      case "experiences":
        return (
          <View isVisible={isVisible} setVisible={setIsVisible}  title="Experiências">
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
