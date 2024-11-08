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
    // {name: "Jobs", link:"/contact"},

]
function Navbar() {
  return (
    <div className="hidden lg:block px-[8%] py-[5px] bg-primary w-screen z-20 absolute left-0 top-0">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="font-bold text-secondary text-[20px]">Medaussie</p>
        </Link>
        <div>
          <ul className="flex gap-8 font-aeonik items-center font-[250] text-[16px] text-dark">
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
                <button className="bg-secondary text-primary p-2 w-[168px] rounded-[8px] text-light text-[16px]">
                  Sign In
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar