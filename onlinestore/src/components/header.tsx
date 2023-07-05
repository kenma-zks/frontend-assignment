import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center justify-between px-5 h-16 shadow-sm border-b border-gray-300">
        <img src={logo} alt="logo" className="pl-12" />
        <Searchbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
