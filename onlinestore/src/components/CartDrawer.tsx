import { FiX } from "react-icons/fi";
import { ICartData } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RootState {
  cart: {
    items: ICartData[];
    totalQuantity: number;
    totalPrice: number;
  };
}

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();

  const cartData: { items: ICartData[] } = useAppSelector(
    (state: RootState) => state.cart
  );
  const { totalQuantity, totalPrice } = useAppSelector((state) => state.cart);

  console.log(cartData);

  const addToCartHandler = (
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number,
    totalPrice: number
  ) => {
    if (title && price && quantity) {
      dispatch(
        addToCart({
          id: id,
          title: title,
          price: price,
          image: image,
          quantity,
          totalPrice,
        })
      );
    }
  };

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    toast.success("Checkout successful", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-xs z-40" />
      <div className="fixed inset-y-0 right-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col z-50">
        <div className="flex flex-col h-12">
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-300">
            <p className="text-lg font-semibold">Cart</p>
            <FiX className="h-5 w-5 hover:cursor-pointer" onClick={onClose} />
          </div>
        </div>
        <div className="flex p-5 gap-2 flex-col items-center justify-start overflow-y-scroll flex-grow">
          {cartData.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-start justify-center shadow-md w-full py-4 rounded-md bg-[#EFEFEF] border border-gray-400"
            >
              <div className="flex flex-col items-center justify-center w-2/5 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain border bg-white border-gray-500 p-4 rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-3 justify-between h-20 w-3/4  ">
                <p className="text-xs font-semibold">{item.title}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm font-semibold">$ {item.price}</p>
                  <div className="py-2 mr-4 flex items-center h-6 bg-white border border-gray-500 w-24  justify-between rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2 cursor-pointer "
                      onClick={() => item.id && removeFromCartHandler(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                    {item.quantity}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2 cursor-pointer"
                      onClick={() =>
                        addToCartHandler(
                          item?.id,
                          item.title,
                          item.price,
                          item.image,
                          1,
                          item.totalPrice
                        )
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end justify-end p-4 border-t border-gray-400 ">
          <div className="flex flex-col items-start justify-start w-full gap-3">
            <div className="flex flex-row items-start justify-between w-full">
              <p className="font-semibold">Items</p>
              <p className="font-semibold">{totalQuantity}</p>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="border border-gray-400 w-full" />
          </div>
          <div className="flex w-full mt-auto pt-4">
            <button
              className="bg-orange-500 text-white text-lg rounded-md font-semibold w-full h-12"
              onClick={checkoutHandler}
            >
              Checkout
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default CartDrawer;
