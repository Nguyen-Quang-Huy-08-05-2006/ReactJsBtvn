export default function Bai05() {
  return (
    <div className="relative w-80 h-48 bg-sky-200 p-4 rounded-md shadow-md">
      <p className="text-sky-900">Relative parent</p>
      <div className="absolute bottom-2 right-2 bg-sky-500 text-white px-4 py-2 rounded-lg shadow">
        Absolute child
      </div>
    </div>
  );
}
