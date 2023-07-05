import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProduct = async () => {
  const response = await instance.get("/products");
  return response.data;
};

export const getCategory = async () => {
  const response = await instance.get("/products/categories");
  return response.data;
};

export const getSingleProduct = async (id?: string) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};
