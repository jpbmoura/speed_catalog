import { Product, GoogleSheetResponse } from '../types';
import { GOOGLE_SHEETS_API_KEY, SHEET_ID, SHEET_RANGE } from './constants';

// Function to fetch data from Google Sheets
export async function fetchProductsFromGoogleSheets(): Promise<Product[]> {
  try {
    if (!GOOGLE_SHEETS_API_KEY || !SHEET_ID) {
      throw new Error('Google Sheets API key or Sheet ID is missing');
    }

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?key=${GOOGLE_SHEETS_API_KEY}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json() as GoogleSheetResponse;
    return parseSheetData(data.values);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Function to parse the Google Sheets data into Product objects
function parseSheetData(values: string[][]): Product[] {
  if (!values || values.length === 0) {
    return [];
  }

  return values
    .filter(row => row.length >= 8) // Ensure we have all required columns
    .map((row, index) => {
      const [
        product_name, 
        image_url, 
        regular_price, 
        promo_price, 
        promo_active, 
        product_description, 
        category,
        stock_status
      ] = row;

      return {
        id: `product-${index}`,
        product_name: product_name || '',
        image_url: image_url || '',
        regular_price: parseFloat(regular_price) || 0,
        promo_price: promo_price ? parseFloat(promo_price) : undefined,
        promo_active: promo_active === 'TRUE' || promo_active === 'true',
        product_description: product_description || '',
        category: category || '',
        stock_status: (stock_status as 'in_stock' | 'low_stock' | 'out_of_stock') || 'in_stock'
      };
    });
}