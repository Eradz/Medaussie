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
    <div className='relative'>
    <div className='w-full fixed top-0 left-0 z-40'>
    <Mobilenav/>
    <Navbar/>
    </div>
    <Hero/>
    <Services/>
    <Professions/>
    <Contact/>
    <Footer/>
  </div>
  );
}
