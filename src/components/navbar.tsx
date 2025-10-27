"use client";

import { NavLinks } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full h-14 flex justify-between items-center relative px-4">
      {/* Logo */}
      <Link
        href="/"
        className="outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:rounded-sm focus-visible:ring-border-primary-hover"
      >
        Logo
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {NavLinks.map(({ href, name }) => (
          <Link
            key={name}
            href={href}
            className="text-text-secondary-default hover:text-text-primary-hover"
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Desktop Login */}
      <Link
        href="/login"
        className="hidden md:inline-block py-2 px-4 bg-button-primary-default text-text-primary-inverted font-medium rounded-lg hover:bg-button-primary-hover"
      >
        Login
      </Link>

      {/* Mobile Toggle */}
      <div
        className="w-10 h-10 flex justify-center items-center md:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <BiX
            size={24}
            className="text-icon-secondary-default hover:text-icon-primary-hover active:text-icon-primary-active"
          />
        ) : (
          <BiMenu
            size={24}
            className="text-icon-secondary-default hover:text-icon-primary-hover active:text-icon-primary-active"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="absolute top-14 left-0 w-full h-[calc(100vh-56px)] bg-bg-primary-default flex flex-col
         md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NavLinks.map(({ href, name }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block py-2 text-text-secondary-default font-medium
                  hover:bg-bg-primary-minimal px-2 rounded-md
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* “Get Started” stays at bottom */}
          <div className="mt-10 flex flex-col gap-6">
            <Link
              href="/join"
              className="block w-full py-3 text-center bg-button-primary-default text-text-primary-inverted rounded-lg hover:bg-button-primary-hover"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="block w-full py-3 text-center bg-button-primary-default text-text-primary-inverted rounded-lg hover:bg-button-primary-hover"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
