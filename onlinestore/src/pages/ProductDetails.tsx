import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { ICartData } from "../types/types";
import { getSingleProduct } from "../api/api";
import { useQuery } from "react-query";
import { useAppDispatch } from "../store/hooks";
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(1);

  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });

  if (productLoading) return <Loading />;

  if (productError) return <div>Error fetching data</div>;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCartHandler = () => {
    if (product && product.price) {
      const totalPrice = product.price * quantity;
      const cartItem: ICartData = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
        totalPrice: totalPrice ?? 0,
      };

      dispatch(addToCart(cartItem));
      console.log(cartItem);

      toast.success("Item added to cart", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  const buyNowHandler = () => {
    toast.success("Item bought successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  console.log(quantity);
  const renderRatingStars = () => {
    const stars = [];
    const rating = product.rating.rate;
    for (let i = 0; i < 5; i++) {
      const starClass = i <= rating ? "text-yellow-400" : "text-gray-300";
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 fill-current ${starClass}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15.585L3.535 19.9l1.065-6.203L.293 7.115l6.257-.91L10 0l3.45 6.205 6.257.91-4.307 4.582 1.064 6.203z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col items-center w-full h-12">
        <div className="flex flex-row justify-start w-full h-full ">
          <div className="flex flex-row items-center justify-start gap-2 w-full px-5 py-4 font-semibold">
            <Link to="/">
              <p className="text-sm text-gray-500 ">{product?.category}</p>
            </Link>
            /<p className="text-sm ">{product?.title}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-grow w-full items-center">
        <div className="flex flex-col items-center w-1/4 h-full">
          <div className="flex flex-col items-center w-full mt-12">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-2/4 h-full ">
          <div className="flex flex-col items-start justify-start w-full pl-4 pr-4">
            <p className="text-xl font-semibold pt-2 text-[#8A8888]">
              {product?.title}
            </p>
            <div className="flex flex-row w-full pt-1 2">
              <div className="flex items-center">
                {renderRatingStars()}
                <p className="text-sm font-semibold ml-2">
                  {product.rating.rate}
                </p>
              </div>
            </div>
            <p className="text-2xl font-semibold pt-2">$ {product?.price}</p>
            <div className="w-full bg-gray-400 h-px mt-3 " />
          </div>
          <div className="flex flex-col items-start justify-start w-full pl-4 pb-4 pr-4">
            <p className="w-40 flex items-center justify-center p-1 font-semibold pt-2 text-orange-500 border-b-2 border-orange-500">
              Detail
            </p>
            <p
              className="text-sm flex items-center justify-center text-justify font-semibold pt-3 text-[#8A8888]"
              style={{ letterSpacing: "0.05em", lineHeight: "1.5" }}
            >
              {product?.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-1/5 px-8 h-full ">
          <div className="flex flex-col items-start justify-start w-full p-4 border      border-black rounded-lg">
            <p className="text-md font-semibold pb-2 ">Set Quantity</p>
            <div className="py-2 flex items-center h-8 border border-black w-32 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2 cursor-pointer"
                onClick={handleDecrement}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
              {quantity}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2 cursor-pointer"
                onClick={handleIncrement}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="w-full bg-gray-400 h-px mt-3 " />
            <div className="flex flex-col items-start justify-start w-full pt-2">
              <p className="text-md font-semibold pt-2">Add Notes</p>
            </div>
            <textarea
              className="w-full text-sm h-24 mt-2 p-2 border border-gray-500 rounded-lg"
              placeholder="Type here..."
            />
            <div className="w-full border-b border-gray-400  mt-3 " />
            <div className="flex flex-col items-start justify-start w-full h-1/3 p-2">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-md font-semibold text-[#8C8F94]">Total</p>
                <p className="text-lg font-semibold ">
                  ${(product?.price ? product.price * quantity : 0).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="w-full h-10 p-3 bg-black text-white text-xs font-semibold rounded-lg flex justify-center items-center"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
            <button
              className="w-full h-10 p-3 bg-white text-black text-xs font-semibold rounded-lg mt-2 border border-black flex justify-center items-center"
              onClick={buyNowHandler}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ProductDetails;
