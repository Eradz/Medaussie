// import Image from "next/image";

import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Professions from "./_components/Professions";
import Services from "./_components/Services";

export default function Home() {
  return (
  <div className="relative">
    <div className="">
    <Navbar/>
    </div>
    <Hero/>
    <Services/>
    <Professions/>
    <Contact/>
  </div>
  );
}
