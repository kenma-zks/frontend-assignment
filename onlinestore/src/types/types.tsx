export interface IProductData {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ICartData {
  id?: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}
