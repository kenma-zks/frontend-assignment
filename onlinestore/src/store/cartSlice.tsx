import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartData } from "../types/types";

interface CartState {
  items: ICartData[];
  totalQuantity: number;
  totalPrice: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    setCart: (state: CartState, action: PayloadAction<ICartData[]>) => {
      state.items = action.payload;
    },

    addToCart: (state: CartState, action: PayloadAction<ICartData>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity += newItem.quantity;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
