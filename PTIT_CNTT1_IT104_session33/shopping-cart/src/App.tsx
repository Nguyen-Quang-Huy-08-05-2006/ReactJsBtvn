import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex gap-5 p-5 max-w-7xl mx-auto">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
