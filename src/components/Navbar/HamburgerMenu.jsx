const HamburgerMenu = ({ isOpen, toggleMenu, navLinks }) => {
  return (
    <div
      className={`lg:hidden ${
        isOpen ? "block" : "hidden"
      } h-screen fixed top-0 left-0 bg-white w-full md:w-96 -z-10 mt-16`}
    >
      <ul className="flex flex-col gap-4 text-lg font-playwrite my-4  w-full ">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-gray-600 hover:underline p-2 hover:bg-slate-100 block"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
