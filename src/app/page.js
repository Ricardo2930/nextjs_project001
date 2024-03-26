import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Main/>
      <Servicios/>
      <Nosotros/>
      <Experiencia/>
      <Testimonios/>
      <Footer/>
    </main>
  );
}
