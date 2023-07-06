import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import Searchbar from "./Searchbar";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setSearchQuery } from "../store/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleSearch = (searchQuery: string) => {
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="flex items-center justify-between sticky top-0 z-30 left-0 bg-white px-5 h-16 shadow-sm border-b border-gray-300">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="pl-12" />
          </Link>
        </div>
        <div className="flex w-2/3 items-center gap-6 justify-end relative">
          <Searchbar onSubmit={handleSearch} />

          <FiShoppingCart
            className="h-5 w-5 mr-6 hover:cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          />
          {totalQuantity > 0 ? (
            <p className="absolute top-1 right-1 -mt-2 bg-orange-500 rounded-full text-xs text-white px-1 py-0.5">
              {totalQuantity}
            </p>
          ) : (
            <p className="absolute top-1 right-1 -mt-2 bg-orange-500 rounded-full text-xs text-white px-1 py-0.5">
              0
            </p>
          )}
        </div>
      </div>
      {isCartOpen && <CartDrawer onClose={handleCloseCart} />}
      <Outlet />
    </div>
  );
};

export default Header;
