export default function Bai08() {
  return (
    <div className="space-y-6">
      <div className="flex justify-start gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>

      <div className="flex justify-end gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>

      <div className="flex justify-center gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>

      <div className="flex justify-between gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>

      <div className="flex justify-around gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>

      <div className="flex justify-evenly gap-2 border p-2 rounded">
        <Btn>01</Btn>
        <Btn>02</Btn>
        <Btn>03</Btn>
      </div>
    </div>
  );
}

function Btn({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-500 text-white px-3 py-2 rounded-md shadow">
      {children}
    </button>
  );
}
