"use client";
import Link from "next/link";


const navLinks = [
    {name: "Home", link:"/"},
    {name: "About", link:"/about"},
    {name: "Exams", link:"/exam"},
    {name: "Licensing", link:"/license"},
    {name: "Resources", link:"/resource"},
]
function Navbar() {
  return (
    <div className="hidden lg:block px-[8%] py-[5px] bg-primary">
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