import About from "@/components/template/About";
import Experiences from "@/components/template/Experiences";
import Footer from "@/components/template/Footer";
import Initial from "@/components/template/Initial";
import Knowledges from "@/components/template/Knowledges";
import NavBar from "@/components/template/NavBar";

export default function Home() {
  return (
   <main>
    <NavBar></NavBar>
    <Initial></Initial>
    <About></About>
    <Knowledges></Knowledges>
    <Experiences></Experiences>
    <Footer></Footer>
   </main>
  )
}
