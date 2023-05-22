import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Knowledges from "@/components/Knowledges";
import NavBar from "@/components/NavBar";

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
