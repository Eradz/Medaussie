'use client'

import { useState } from "react";
import Link from "next/link";

const menuItems =  [
  {name: "Home", link:"/"},
  {name: "About", link:"/about"},
  {name: "Exams", link:"/exam"},
  {name: "Licensing", link:"/license"},
  {name: "Legal", link:"/legal"},
]
const register =  [
  {name: "Signup", link:"/signup"},
  {name: "Login", link:"/login"},
]
function Mobilenav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-primary lg:hidden flex px-8 py-4 ">
      <div className="flex w-full items-center justify-between">
      <Link href="/">
          <p className="font-bold text-secondary text-[18px]"><i>Medaussie</i></p>
        </Link>
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="cursor-pointer"
          >
            <path
              d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-screen bg-secondary text-white z-50 p-4">
          <div className="flex justify-end">
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="cursor-pointer"
            >
              <path
                d="M18.36 6.64L17.64 5.92L12 11.56L6.36 5.92L5.64 6.64L11.28 12.28L5.64 17.92L6.36 18.64L12 13L17.64 18.64L18.36 17.92L12.72 12.28L18.36 6.64Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-8 mt-4 mx-auto ">
                {menuItems.map(({name, link}) => (
                  <Link key={name} href={link} onClick={()=> setMenuOpen(false)}>
                    <p>
                      {name}
                    </p>
                  </Link>
                ))}
                {register.map(({name, link}) => (
                  <Link className="flex justify-center w-full"  key={name} href={link} onClick={()=> setMenuOpen(false)}>
                    <button className='w-[70%] py-3 font-bold border text-secondary border-secondary bg-primary rounded-sm hover:bg-secondary hover:text-primary hover:border-primary'>
                      {name}
                    </button>
                  </Link>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobilenav;
