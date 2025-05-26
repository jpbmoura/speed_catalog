import { useMemo, useState } from "react";
import useSWR from "swr";
import { fetchProductsFromGoogleSheets } from "../lib/api";
import { Product, SortOption } from "../types";
import { POLLING_INTERVAL } from "../lib/constants";

export function useProducts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState<SortOption>("name_asc");
  const [showPromotionsOnly, setShowPromotionsOnly] = useState(false);

  const {
    data: products,
    error,
    isLoading,
    isValidating,
  } = useSWR("products", fetchProductsFromGoogleSheets, {
    refreshInterval: POLLING_INTERVAL,
    revalidateOnFocus: false,
    revalidateIfStale: true,
    dedupingInterval: 30000,
  });

  const categories = useMemo(() => {
    if (!products) return ["all"];
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    return ["all", ...uniqueCategories];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.product_name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Filter by promotions only
    if (showPromotionsOnly) {
      result = result.filter((product) => product.promo_active);
    }

    // Sort products
    result = sortProducts(result, sortOption);

    return result;
  }, [products, selectedCategory, searchQuery, sortOption, showPromotionsOnly]);

  const promotionalProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => product.promo_active);
  }, [products]);

  return {
    allProducts: products || [],
    filteredProducts,
    promotionalProducts,
    categories,
    error,
    isLoading,
    isRefreshing: isValidating && !isLoading,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    showPromotionsOnly,
    setShowPromotionsOnly,
  };
}

function sortProducts(products: Product[], sortOption: SortOption): Product[] {
  return [...products].sort((a, b) => {
    const aPrice =
      a.promo_active && a.promo_price !== undefined
        ? a.promo_price
        : a.regular_price;
    const bPrice =
      b.promo_active && b.promo_price !== undefined
        ? b.promo_price
        : b.regular_price;

    switch (sortOption) {
      case "name_asc":
        return a.product_name.localeCompare(b.product_name);
      case "name_desc":
        return b.product_name.localeCompare(a.product_name);
      case "price_asc":
        return aPrice - bPrice;
      case "price_desc":
        return bPrice - aPrice;
      default:
        return 0;
    }
  });
}
