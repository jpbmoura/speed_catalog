import React from "react";
import { motion } from "framer-motion";
import { Filters } from "../components/filters/Filters";
import { ProductGrid } from "../components/product/ProductGrid";
import { useProducts } from "../hooks/useProducts";
import ErrorBoundary from "../components/ErrorBoundary";

const HomePage: React.FC = () => {
  const {
    filteredProducts,
    categories,
    error,
    isLoading,
    isRefreshing,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    showPromotionsOnly,
    setShowPromotionsOnly,
  } = useProducts();

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Products
        </h2>
        <p className="text-gray-600 mb-2">
          We couldn't load the product data from Google Sheets.
        </p>
        <p className="text-gray-600">
          Please check your API configuration and try again.
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
        <section className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Catalogo de Produtos
          </h1>
          <p className="text-gray-600">
            Procurar produtos, categorias, promoções e mais
          </p>
        </section>

        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          showPromotionsOnly={showPromotionsOnly}
          setShowPromotionsOnly={setShowPromotionsOnly}
        />

        <ProductGrid
          products={filteredProducts}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          emptyMessage={
            searchQuery
              ? "No products match your search"
              : selectedCategory !== "all"
              ? `No products found in "${selectedCategory}" category`
              : showPromotionsOnly
              ? "No promotional products available"
              : "No products found"
          }
        />
      </motion.div>
    </ErrorBoundary>
  );
};

export default HomePage;
