import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductData } from "../types/types";

interface ProductsState {
  selectedProduct: IProductData | null;
  products: IProductData[];
}

const initialState: ProductsState = {
  selectedProduct: null,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<IProductData>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
