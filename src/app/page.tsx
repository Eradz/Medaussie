// import Image from "next/image";

import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Professions from "./_components/Professions";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Professions/>
  </div>
  );
}
