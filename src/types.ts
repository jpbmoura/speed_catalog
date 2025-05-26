export interface Product {
  id: string;
  product_name: string;
  image_url: string;
  regular_price: number;
  promo_price?: number;
  promo_active: boolean;
  product_description: string;
  category: string;
  stock_status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

export type SortOption = 'name_asc' | 'name_desc' | 'price_asc' | 'price_desc';

export interface GoogleSheetResponse {
  values: string[][];
}