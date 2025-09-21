import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../reducer/store";
import ProductItem from "./ProductItem";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-500 text-white px-5 py-4 font-bold text-lg">
        List Products
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
