# Product Catalog with Google Sheets Integration

A responsive web application that displays products from a Google Sheets backend, with WhatsApp integration for inquiries.

## Features

- Fetches product data from a Google Sheets spreadsheet
- Responsive design works on all devices
- Product filtering, sorting, and searching
- Promotional products section
- WhatsApp integration for product inquiries
- Real-time data updates (every 5 minutes)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Google account with access to Google Sheets and Google Cloud Console

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your configuration details
4. Start the development server: `npm run dev`

## Google Sheets Setup

1. Create a new Google Sheet with the following columns in the first row:
   - product_name (string)
   - image_url (string)
   - regular_price (number)
   - promo_price (number, optional)
   - promo_active (boolean)
   - product_description (string)
   - category (string)
   - stock_status (string)

2. Make your sheet public: Click "Share" > "Anyone with the link" > "Viewer"

3. Get your Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

4. Create a Google Cloud Platform project and enable the Google Sheets API

5. Create an API key and restrict it to the Google Sheets API only

6. Add these values to your `.env` file:
   ```
   VITE_GOOGLE_SHEETS_API_KEY=your_google_api_key_here
   VITE_GOOGLE_SHEET_ID=your_google_sheet_id_here
   VITE_WHATSAPP_NUMBER=your_whatsapp_number_here
   ```

## Technology Stack

- React with TypeScript
- React Router for navigation
- SWR for data fetching and caching
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

## Deployment

Build the project for production:

```
npm run build
```

This will generate a `dist` folder that can be deployed to any static hosting service.