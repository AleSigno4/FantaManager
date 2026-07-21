export default function Lineup() {
  return (
    <div className="bg-white rounded-xl border-2 border-black p-2 text-center">
      <img
        src="assets/lautaro.png"
        alt="lautaro icon"
        className="block mx-auto w-10"
      />
      <h3 className="font-bold text-lg">Lautaro</h3>
      <h4 className="font-semibold">Inter - Verona</h4>
      <h5 className="">70%</h5>
      <div className="border border-gray-500 rounded-2xl h-1 overflow-hidden">
        <div className="bg-green-600 h-full" style={{ width: "70%" }}></div>
      </div>
    </div>
  );
}
