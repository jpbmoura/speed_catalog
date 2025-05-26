// API Configuration
export const GOOGLE_SHEETS_API_KEY =
  import.meta.env.VITE_GOOGLE_SHEETS_API_KEY ?? "";
export const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID ?? "";
export const SHEET_RANGE = "A2:J5000"; // Skip header row, adjust as needed
export const POLLING_INTERVAL = 300000; // 5 minutes in milliseconds

// WhatsApp Configuration
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "5587999492694";
export const WHATSAPP_MESSAGE_TEMPLATE = "Olá estou interessado no produto";

// Categories
export const ALL_CATEGORIES = "all";

// Sort Options
export const SORT_OPTIONS = [
  { value: "name_asc", label: "Nome (A-Z)" },
  { value: "name_desc", label: "Nome (Z-A)" },
  { value: "price_asc", label: "Preço (Menor - Maior)" },
  { value: "price_desc", label: "Preço (Maior - Menor)" },
];

// Stock Status
export const STOCK_STATUS = {
  in_stock: { label: "Em Estoque", color: "text-green-600" },
  low_stock: { label: "Low Stock", color: "text-orange-500" },
  out_of_stock: { label: "Esgotado", color: "text-red-500" },
};

// Cache Duration
export const CACHE_DURATION = 60000; // 1 minute in milliseconds
