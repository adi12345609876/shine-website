"use client";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function NavBar() {
  const [navbarOpen, SetnavbarOpen] = useState(false);
  const navlinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Expertise",
      path: "#expertise",
    },
    {
      title: "Contact Us",
      path: "#contact",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-slate-200 bg-opacity-90 border border-b-slate-300 border-l-transparent border-r-transparent text-black z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href="/"
            className="flex flex-row gap-2 text-4xl md:text-5xl text-black font-semibold"
          >
            <Image src={"/logo-icon.png"} width={50} height={50} alt="logo" />
            SHINE
          </Link>
          <div className="mobile-menu block md:hidden">
            {navbarOpen ? (
              <button
                onClick={() => SetnavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-700 hover:text-slate-900 hover:border-slate-900"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => SetnavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-700 hover:text-slate-900 hover:border-slate-900"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
          </div>
          {!navbarOpen && (
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul className="flex p-4 md:flex-row md:space-x-8">
                {navlinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {navbarOpen && <MenuOverlay links={navlinks} />}
      </nav>
    </>
  );
}

export default NavBar;
