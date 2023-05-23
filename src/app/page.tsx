"use client";

import About from "@/components/template/About";
import Experiences from "@/components/template/Experiences";
import Footer from "@/components/template/Footer";
import Initial from "@/components/template/Initial";
import Knowledges from "@/components/template/Knowledges";
import NavBar from "@/components/template/NavBar";

import styles from "./page.module.css";
import View from "@/components/template/View";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  function onchange(typeContent:string) {
    setContent(typeContent)
  }

  function renderContent() {
    switch (content) {
      case "initial":
        return (
          <View title="Inicio">
            <Initial></Initial>
          </View>
        );
      case "about":
        return (
          <View title="Sobre">
            <About></About>
          </View>
        );
      case "experiences":
        return (
          <View title="Experiencias">
            <Experiences></Experiences>
          </View>
        );
      case "projects":
        return (
          <View title="projects">
            <Knowledges></Knowledges>
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
