import { IProductData } from "../types/types";

const ProductCard = ({ product }: { product: IProductData }) => {
  return (
    <div className="w-64 border border-gray-400 rounded-md hover:shadow-md cursor-pointer">
      <div className="w-full relative bg-white rounded-t-md p-4">
        <div className="absolute top-2 right-2 flex flex-row items-center justify-center h-8 p-2 bg-orange-500 rounded-full">
          <p className="text-sm font-semibold text-white">$ {product.price}</p>
        </div>
        <img
          src={product.image}
          alt="laptop"
          className="w-full h-44 rounded-t-md object-contain"
        />
      </div>
      <div className="w-full h-32 rounded-b-md border-t border-gray-400 bg-[#EFEFEF]">
        <div className="flex flex-row items-center justify-between w-full pt-3 px-2">
          <p className="text-sm font-semibold ">{product.title}</p>
        </div>
        <p className="flex flex-row justify-between w-full text-xs font-semibold px-2 py-1 text-[#8A8888] text-justify overflow-hidden">
          <span className="line-clamp-2">{product.description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
