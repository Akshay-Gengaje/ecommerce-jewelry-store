const NavLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="hover:text-gray-600 hover:underline">
        {children}
      </a>
    </li>
  );
};

export default NavLink;
