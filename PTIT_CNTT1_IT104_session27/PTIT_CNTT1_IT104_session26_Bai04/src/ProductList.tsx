import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "iPhone 15 Pro" },
  { id: 2, name: "Samsung Galaxy S24" },
  { id: 3, name: "MacBook Air M3" },
  { id: 4, name: "Dell XPS 13" },
  { id: 5, name: "Sony WH-1000XM5" },
];

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchParams({ search: inputValue.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {sampleProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
