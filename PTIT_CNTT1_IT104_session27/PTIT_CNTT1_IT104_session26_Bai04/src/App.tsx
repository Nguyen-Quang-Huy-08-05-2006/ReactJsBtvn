import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";

export default function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}
