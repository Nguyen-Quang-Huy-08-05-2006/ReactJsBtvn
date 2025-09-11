import { useParams, Link } from "react-router-dom";
import { products } from "../data";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Giá: {product.price.toLocaleString()} đ</p>
      <p>{product.detail}</p>
      <Link to="/products">Quay lại danh sách</Link>
    </div>
  );
}

export default ProductDetail;
