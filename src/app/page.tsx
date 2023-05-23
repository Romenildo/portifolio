
import About from "@/components/template/About";
import Experiences from "@/components/template/Experiences";
import Footer from "@/components/template/Footer";
import Initial from "@/components/template/Initial";
import Knowledges from "@/components/template/Knowledges";
import NavBar from "@/components/template/NavBar";

import styles from "./page.module.css"
import View from "@/components/template/View";


export default function Home() {
  return (
   <main>
    <NavBar></NavBar>
    <View title="teste"> 
      <Experiences></Experiences>
    </View>

   </main>
  )
}
