import React from 'react';
import { motion } from 'framer-motion';
import { Percent } from 'lucide-react';
import { ProductGrid } from '../components/product/ProductGrid';
import { useProducts } from '../hooks/useProducts';
import ErrorBoundary from '../components/ErrorBoundary';

const PromotionsPage: React.FC = () => {
  const {
    promotionalProducts,
    error,
    isLoading,
    isRefreshing
  } = useProducts();

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Promotions</h2>
        <p className="text-gray-600">
          We couldn't load the promotional products data.
        </p>
        <pre className="bg-gray-100 p-4 rounded mt-4 text-left text-sm text-red-600 max-w-full overflow-auto">
          {error.message}
        </pre>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="mb-6 flex items-center">
          <Percent className="h-10 w-10 text-red-500 mr-3" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Special Promotions
            </h1>
            <p className="text-gray-600">
              Check out our current special offers and discounts
            </p>
          </div>
        </section>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
          <p className="text-red-800">
            <strong>Limited time offers!</strong> These promotions may end soon. 
            Contact us today to take advantage of these special prices.
          </p>
        </div>

        <ProductGrid
          products={promotionalProducts}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          emptyMessage="No promotional products available at this time. Check back soon!"
        />
      </motion.div>
    </ErrorBoundary>
  );
};

export default PromotionsPage;