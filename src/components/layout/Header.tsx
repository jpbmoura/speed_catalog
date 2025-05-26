import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Speed Suplementos - Catalogo
              </span>
            </Link>
          </div>

          {/* <nav className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              All Products
            </Link>
            <Link
              to="/promotions"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
            >
              <Percent size={16} className="mr-1" />
              Promotions
            </Link>
          </nav> */}
        </div>
      </div>
    </motion.header>
  );
};
