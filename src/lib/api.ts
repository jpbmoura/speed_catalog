import { Product, GoogleSheetResponse } from "../types";
import { GOOGLE_SHEETS_API_KEY, SHEET_ID, SHEET_RANGE } from "./constants";

// Function to fetch data from Google Sheets
export async function fetchProductsFromGoogleSheets(): Promise<Product[]> {
  try {
    if (!GOOGLE_SHEETS_API_KEY || !SHEET_ID) {
      throw new Error("Google Sheets API key or Sheet ID is missing");
    }

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?key=${GOOGLE_SHEETS_API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = (await response.json()) as GoogleSheetResponse;

    return parseSheetData(data.values);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// Function to parse the Google Sheets data into Product objects
function parseSheetData(values: string[][]): Product[] {
  if (!values || values.length === 0) {
    return [];
  }

  return values
    .filter((row) => row.length >= 4) // Ensure we have all required columns
    .map((row) => {
      const [
        id,
        product_name,
        category,
        product_quantity,
        wholesaler_price,
        regular_price,
        due_date,
        promo_price,
        promo_active,
        image_url,
      ] = row;

      return {
        id: id || "",
        product_name: product_name || "",
        category: category || "",
        product_quantity: product_quantity || "",
        wholesaler_price: wholesaler_price || "",
        due_date: due_date || "",
        image_url: image_url || "",
        regular_price: parseFloat(regular_price) || 0,
        promo_price: promo_price ? parseFloat(promo_price) : undefined,
        promo_active: promo_active === "TRUE" || promo_active === "true",
        stock_status: product_quantity != "0,00" ? "in_stock" : "out_of_stock",
      };
    });
}
