"use client";
// import Image from "next/image";
import Link from "next/link";
// import Logo from "/public/assests/Logo.png";


const navLinks = [
    {name: "Home", link:"/"},
    {name: "About", link:"/about"},
    {name: "Exams", link:"/"},
    {name: "Licensing", link:"/about"},
    {name: "Resources", link:"/about"},
    {name: "Jobs", link:"/contact"},

]
function Navbar() {
  return (
    <div className="hidden lg:block px-[4rem] bg-primary">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="font-bold text-secondary">Medaussie</p>
        </Link>
        <div>
          <ul className="flex gap-8 font-aeonik items-center font-[250] text-[18px] text-dark">
                {navLinks.map((navLink)=>{
                    return(
                        <Link href={navLink.link} key={navLink.name}>
                        <li>{navLink.name}</li>
                        </Link>
                    )
                })}
          </ul>
        </div>
        <div className="flex font-aeonik gap-[18.5px] items-center">
              <Link href="signup" className="font-semibold">
                Sign Up
              </Link>
              <Link href="login">
                <button className="bg-[#072D6B] p-[10px] w-[168px] rounded-[8px] text-light text-[16px]">
                  Sign In
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar