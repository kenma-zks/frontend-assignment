import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";

const Searchbar = () => {
  return (
    <div className="relative w-1/3 h-10 rounded-md border border-gray-400 ">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full rounded-md pl-10"
      />
      <AiOutlineSearch className="absolute top-2 left-2  text-2xl text-gray-500" />
      <div className="absolute top-1 bottom-1 right-2 px-5 py-1 bg-orange-500 rounded-md">
        <Button />
      </div>
    </div>
  );
};

export default Searchbar;
