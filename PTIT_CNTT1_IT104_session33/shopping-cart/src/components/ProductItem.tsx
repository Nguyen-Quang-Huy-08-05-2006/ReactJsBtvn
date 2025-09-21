import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { Product } from "../reducer";
import { addToCart } from "../action/cartAction";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart(product, quantity));
    }
  };

  const getPlaceholderImage = () => {
    const colors = ["ff6b35", "4a90e2", "6b8e23", "ff69b4", "d4821a"];
    const color = colors[product.id % colors.length];
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60' viewBox='0 0 80 60'%3E%3Crect width='80' height='60' fill='%23${color}'/%3E%3Ctext x='40' y='35' text-anchor='middle' fill='white' font-size='10'%3E${product.name}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <img
        src={product.img}
        alt={product.name}
        className="w-20 h-15 object-cover rounded"
        onError={(e) => {
          e.currentTarget.src = getPlaceholderImage();
        }}
      />
      <div className="flex-1">
        <div className="font-bold text-lg text-gray-800 mb-1">
          {product.name}
        </div>
        <div className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-12 h-9 text-center border border-gray-300 rounded text-sm"
          min="0"
          placeholder="0"
        />
        <div className="bg-orange-500 text-white px-3 py-2 rounded font-bold text-sm whitespace-nowrap">
          {product.price} USD
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-3 py-2 rounded text-xs font-bold transition-colors whitespace-nowrap disabled:cursor-not-allowed"
          onClick={handleAddToCart}
          disabled={quantity === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
