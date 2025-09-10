import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./PTIT_CNTT1_IT104_session26_Bai01/Product";
import ProductDetail from "./PTIT_CNTT1_IT104_session26_Bai01/ProductDetail";
import Students from "./PTIT_CNTT1_IT104_session26_Bai02/Students";
import StudentDetail from "./PTIT_CNTT1_IT104_session26_Bai02/StudentDetail";

function App() {
  return (
    <>
      <p>Bai01: </p>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <br />
      <p>Bai02: </p>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/student/:name" element={<StudentDetail />} />
      </Routes>
    </>
  );
}

export default App;
