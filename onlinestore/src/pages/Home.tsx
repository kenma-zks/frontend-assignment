import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import { getProduct } from "../api/api";
import { IProductData } from "../types/types";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-grow w-full">
      <div className="flex flex-col items-center w-1/4 h-full pl-6 pr-2 py-5 bg-[#FCFBFC] rounder-md ">
        <div className="flex flex-col flex-grow items-center justify-center w-full h-1/4 bg-white border border-gray-500 shadow-sm rounded-md">
          <div className="flex flex-col w-full justify-start px-5 text-xl pt-3 font-semibold flex-grow">
            <p className="w-full ">Filters</p>
            <div className="flex w-full items-center justify-between pt-4">
              <p className="w-full text-sm ">Category</p>
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    value="white"
                    type="checkbox"
                    className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm font-normal text-gray-500">
                    Electronics
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    value="white"
                    type="checkbox"
                    className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm font-normal text-gray-500">
                    Jewelery
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    value="white"
                    type="checkbox"
                    className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm font-normal text-gray-500">
                    Men's Clothing
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    value="white"
                    type="checkbox"
                    className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm font-normal text-gray-500">
                    Women's Clothing
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-3/4 h-full pl-2 pr-5 py-5 bg-[#FCFBFC] rounded-md">
        <div className="flex flex-col flex-grow items-center justify-center w-full h-1/4 bg-white border border-gray-500 shadow-sm rounded-md">
          <div className="flex flex-row flex-wrap gap-8 w-full justify-start px-5 py-4 flex-grow">
            {data.map((product: IProductData) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
