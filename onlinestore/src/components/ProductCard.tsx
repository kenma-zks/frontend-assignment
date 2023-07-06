import { IProductData } from "../types/types";

const ProductCard = ({ product }: { product: IProductData }) => {
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
    <div className="w-64 border border-gray-400 rounded-md hover:shadow-md cursor-pointer">
      <div className="w-full relative bg-white rounded-t-md p-4">
        <div className="absolute top-2 right-2 flex flex-row items-center justify-center h-8 p-2 bg-orange-500 rounded-full">
          <p className="text-sm font-semibold text-white">$ {product.price}</p>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 rounded-t-md object-contain"
        />
      </div>
      <div className="w-full h-32 rounded-b-md flex flex-col border-t border-gray-400 bg-[#EFEFEF]">
        <div className="flex flex-row w-full pt-1 px-2">
          <div className="flex items-center">
            {renderRatingStars()}
            <p className="text-sm font-semibold ml-2">{product.rating.rate}</p>
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center justify-between ">
          <div className="flex flex-row  w-full pt-1 px-2">
            <p className="text-sm font-semibold line-clamp-3">
              {product.title}
            </p>
          </div>
          <p className="flex flex-row w-full text-xs font-semibold px-2 py-1  text-[#8A8888] text-justify overflow-hidden">
            <p className="line-clamp-2">{product.description}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
