export interface  Product {
  id: string;
  thumbnail: string;
  title: string;
  quantity: number;
  date: string;
  total: number;
  status: string;
}

export interface Order {
  products: Product[];
}
