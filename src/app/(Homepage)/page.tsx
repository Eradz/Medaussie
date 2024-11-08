// import Image from "next/image";

import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Mobilenav from "./_components/Mobilenav";
import Navbar from "./_components/Navbar";
import Professions from "./_components/Professions";
import Services from "./_components/Services";

export default function Home() {
  return (
  <div className="relative">
    <Mobilenav/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Professions/>
    <Contact/>
    <Footer/>
  </div>
  );
}
