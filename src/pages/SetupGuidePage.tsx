import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';

const SetupGuidePage: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto py-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Google Sheets Setup Guide</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Setting Up Your Google Sheet</h2>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <h3 className="text-lg font-medium text-gray-700">Create a new Google Sheet</h3>
              <p className="text-gray-600 mt-1">Go to <a href="https://sheets.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Sheets</a> and create a new spreadsheet.</p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium text-gray-700">Set up your columns</h3>
              <p className="text-gray-600 mt-1">Create the following columns in row 1:</p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>product_name</strong> (string): Name of the product</li>
                <li><strong>image_url</strong> (string): URL to the product image</li>
                <li><strong>regular_price</strong> (number): Regular price of the product</li>
                <li><strong>promo_price</strong> (number, optional): Promotional price</li>
                <li><strong>promo_active</strong> (boolean): TRUE or FALSE to indicate if promotion is active</li>
                <li><strong>product_description</strong> (string): Description of the product</li>
                <li><strong>category</strong> (string): Product category</li>
                <li><strong>stock_status</strong> (string): "in_stock", "low_stock", or "out_of_stock"</li>
              </ul>
            </li>
            
            <li>
              <h3 className="text-lg font-medium text-gray-700">Fill in your product data</h3>
              <p className="text-gray-600 mt-1">Add your products starting from row 2. Ensure you follow the correct format for each column.</p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium text-gray-700">Make your sheet public</h3>
              <p className="text-gray-600 mt-1">
                Click "Share" in the top right corner, then select "Anyone with the link" under "General access".
                Make sure the permission is set to "Viewer".
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium text-gray-700">Get your Google Sheet ID</h3>
              <p className="text-gray-600 mt-1">
                The Sheet ID is the long string of characters in the URL of your spreadsheet: 
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm ml-1">
                  https://docs.google.com/spreadsheets/d/[YOUR_SHEET_ID]/edit
                </code>
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium text-gray-700">Get your Google API Key</h3>
              <p className="text-gray-600 mt-1">
                Go to the <a href="https://console.cloud.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>, create a project,
                enable the Google Sheets API, and create an API key.
              </p>
            </li>
          </ol>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuration</h2>
          
          <p className="text-gray-600 mb-4">
            Create a <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file in the root of your project with the following variables:
          </p>
          
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`VITE_GOOGLE_SHEETS_API_KEY=your_google_api_key
VITE_GOOGLE_SHEET_ID=your_google_sheet_id
VITE_WHATSAPP_NUMBER=your_whatsapp_number`}
          </pre>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Content Management</h3>
            <p className="text-blue-700">
              Once set up, non-technical users can simply edit the Google Sheet to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-blue-700">
              <li>Add new products</li>
              <li>Update prices and descriptions</li>
              <li>Change promotional status</li>
              <li>Update stock status</li>
            </ul>
            <p className="text-blue-700 mt-2">
              Changes will be reflected on the website within 5 minutes automatically.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default SetupGuidePage;