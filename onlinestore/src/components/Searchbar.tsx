import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Searchbar = ({
  onSubmit,
}: {
  onSubmit: (searchQuery: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSubmit(query);
  };

  return (
    <form className="relative w-full md:w-1/3 h-10 rounded-full border border-gray-400">
      <input
        type="text"
        placeholder="Search Product"
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full h-full rounded-full pl-4 text-sm font-semibold bg-[#F5F7F9]"
      />
      <AiOutlineSearch className="absolute top-2 right-2  text-2xl text-gray-500" />
    </form>
  );
};

export default Searchbar;
