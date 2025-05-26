export interface Product {
  id: string;
  product_name: string;
  category: string;
  product_quantity: string;
  wholesaler_price: string;
  due_date: string;
  image_url: string;
  regular_price: number;
  promo_price?: number;
  promo_active: boolean;
  stock_status: "in_stock" | "low_stock" | "out_of_stock";
}

export type SortOption = "name_asc" | "name_desc" | "price_asc" | "price_desc";

export interface GoogleSheetResponse {
  values: string[][];
}
