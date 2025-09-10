const LazyLoadComp = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lazy Loaded Component</h2>
      <p>
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LazyLoadComp;
