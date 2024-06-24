import { useState } from "react";
import { GiDiamondRing } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Searchbar from "../Searchbar/Searchbar";
import NavLink from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu.jsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/our-story", label: "Our Story" },
];

const Navbar = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-screen h-16 fixed top-0 left-0 z-20 bg-white flex justify-between items-center px-4 lg:px-52 shadow-md">
      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center gap-4">
        <button aria-label="Menu" className="text-2xl " onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <HamburgerMenu
        isOpen={menuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
      />

      {/* Logo */}
      <div className="flex items-center font-playwrite">
        <GiDiamondRing className="text-3xl" aria-label="Logo" />
        <a href="/" className="flex items-center h-full text-xl ml-2">
          Jewelry
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-sm font-playwrite">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center items-center gap-2">
        <button aria-label="Search" onClick={() => setShowSearchbar(true)}>
          <CiSearch className="text-2xl" />
        </button>
        <button aria-label="Shopping Bag">
          <IoBagHandleOutline className="text-2xl" />
        </button>
      </div>

      {showSearchbar && <Searchbar setShowSearchbar={setShowSearchbar} />}
    </header>
  );
};

export default Navbar;
