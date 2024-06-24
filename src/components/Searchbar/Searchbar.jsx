import { RiCloseLargeLine } from "react-icons/ri";

const Searchbar = ({ setShowSearchbar }) => {
  return (
    <div className="w-screen h-16 fixed top-0 left-0 z-10 bg-white flex justify-between items-center px-10 md:px-52 shadow-md gap-2 ">
      {/* Searchbar */}
      <input
        type="text"
        placeholder="Search"
        className="w-full border border-gray-200 shadow-sm px-5 py-2 rounded-md  "
      />
      {/* Close Button */}
      <RiCloseLargeLine
        className="text-2xl hover:cursor-pointer"
        onClick={() => setShowSearchbar(false)}
      />
    </div>
  );
};

export default Searchbar;
