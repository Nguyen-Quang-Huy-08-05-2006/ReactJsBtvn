export default function Bai07() {
  return (
    <div className="grid grid-cols-3 gap-4 w-fit">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="bg-[rgb(217,70,239)] text-white font-bold py-4 rounded-lg text-center"
        >
          0{i + 1}
        </div>
      ))}
    </div>
  );
}
