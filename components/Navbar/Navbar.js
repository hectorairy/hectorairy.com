import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [click, setClick] = useState(0);

  const handleClick = () => setClick(!click);
  const router = useRouter();

  return (
    <nav className="bg-white flex justify-center font-medium sticky top-0 z-[999] shadow-lg transition-all duration-200 ease-in">
      <div className="flex justify-between h-20 z-[1] w-full max-w-6xl">
        <Link href="/">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500 justify-self-start cursor-pointer no-underline text-2xl flex items-center m-0 mx-2 mr-8">
            <div className="mr-1">
              <Image src={"/images/logo.png"} width={40} height={40} />
            </div>
            Héctor Airy
          </div>
        </Link>
        <div
          onClick={handleClick}
          className="hidden md:flex md:h-20 md:w-20 md:justify-end md:items-center md:m-0 md:mr-2"
        >
          {click ? (
            <HiOutlineXCircle className="h-7 w-7 text-sky-500" />
          ) : (
            <HiMenuAlt3 className="h-7 w-7 text-sky-500" />
          )}
        </div>
        <ul
          className={`flex items-center text-center md:flex md:flex-col md:w-full md:h-[90vh] md:absolute ${
            click ? "md:top-full" : "md:-top-[1000px]"
          } md:opacity-100 md:bg-white md:transition-all md:duration-500 md:ease-in-out`}
        >
          <NavLink to="/" text="Inicio" active={router.asPath} />
          <NavLink to="/about" text="Sobre mí" active={router.asPath} />
          <NavLink to="/portfolio" text="Portafolio" active={router.asPath} />
          <NavLink to="/contact" text="Contacto" active={router.asPath} />
        </ul>
      </div>
    </nav>
  );
};
