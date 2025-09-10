import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>chi tiet san pham</h2>
      <p>ID = {id}</p>
    </div>
  );
};

export default ProductDetail;
