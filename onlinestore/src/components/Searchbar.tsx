import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="relative w-1/3 h-10 rounded-full border border-gray-400 ">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full h-full rounded-full pl-4 text-sm font-semibold bg-[#F5F7F9]"
      />
      <AiOutlineSearch className="absolute top-2 right-2  text-2xl text-gray-500" />
    </div>
  );
};

export default Searchbar;
