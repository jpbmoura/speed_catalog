import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Product } from "../../types";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE_TEMPLATE,
  STOCK_STATUS,
} from "../../lib/constants";
import { Button } from "../ui/Button";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    product_name,
    image_url,
    regular_price,
    promo_price,
    promo_active,
    stock_status,
  } = product;

  const formattedRegularPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL",
  }).format(regular_price);

  const formattedPromoPrice = promo_price
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BRL",
      }).format(promo_price)
    : null;

  const stockStatusInfo = STOCK_STATUS[stock_status];
  const isOutOfStock = stock_status === "out_of_stock";

  const handleWhatsAppClick = () => {
    const message = `${WHATSAPP_MESSAGE_TEMPLATE} ${product_name}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className={`${
        isOutOfStock ? "bg-gray-100" : "bg-white hover:shadow-lg"
      } rounded-lg shadow-md overflow-hidden transition-shadow `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {image_url ? (
          <img
            src={image_url}
            alt={product_name}
            className={`${
              isOutOfStock ? "grayscale" : "grayscale-0  hover:scale-105"
            } w-full h-full object-cover transition-transform duration-300`}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <span className="text-gray-400">Sem Imagem</span>
          </div>
        )}

        {promo_active && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm font-bold uppercase ">
            PROMOÇÃO
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 line-clamp-2">
          {product_name}
        </h2>

        <div className="mb-2">
          {promo_active && promo_price !== undefined ? (
            <div className="flex items-center">
              <span className="text-lg font-bold text-red-500 mr-2">
                {formattedPromoPrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formattedRegularPrice}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-700">
              {formattedRegularPrice}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${stockStatusInfo.color}`}>
            {stockStatusInfo.label}
          </span>

          <Button
            onClick={handleWhatsAppClick}
            variant={isOutOfStock ? "outline" : "primary"}
            size="sm"
            disabled={isOutOfStock}
            color="green"
            icon={<MessageSquare size={16} />}
          >
            Comprar
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
