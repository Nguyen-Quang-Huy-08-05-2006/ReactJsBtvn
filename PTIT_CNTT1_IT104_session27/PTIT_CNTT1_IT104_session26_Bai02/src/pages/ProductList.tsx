import { Link } from "react-router-dom";
import { products } from "../data";

function ProductList() {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ margin: "20px 0" }}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p>
              <strong>{p.price.toLocaleString()} đ</strong>
            </p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
