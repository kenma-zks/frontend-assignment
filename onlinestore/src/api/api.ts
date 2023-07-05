import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProduct = async () => {
  const response = await instance.get("/products");
  return response.data;
};
