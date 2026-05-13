"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ProfileButton from "./ProfileButton";

const HamburgerMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden text-gray-600 hover:text-emerald-600 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-md px-4 pb-4 pt-2 flex flex-col gap-3 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-emerald-600 font-medium py-1 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <ProfileButton />
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
