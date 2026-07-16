import { useState} from "react";

export default function PlayerList() {
  const [isMantra, setIsMantra] = useState(false);

  return (
    <main className="flex flex-col w-full px-4 pb-8">
      <div className="flex justify-between w-full items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Cerca giocatore..."
          className="flex-1 bg-green-800 h-14 text-xl text-gray-100 placeholder-gray-100 border-2 rounded-lg border-green-900 p-2"
        />
        <div className="flex items-center gap-4 h-14 md:w-212.5 w-full bg-green-800 text-xl text-gray-100 border-2 rounded-lg border-green-900 px-4">
          <label className="flex items-center gap-3 cursor-pointer text-gray-100 text-xl">
            <span
              className={
                !isMantra ? "text-green-400 font-semibold" : "text-gray-100"
              }
            >
              Classic
            </span>
            <input
              type="checkbox"
              checked={isMantra}
              onChange={() => setIsMantra(!isMantra)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 border-2 border-green-950 rounded-full transition-colors duration-200 ${
                isMantra ? "bg-emerald-400" : "bg-green-900"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  isMantra ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span
              className={
                isMantra ? "text-green-400 font-semibold" : "text-gray-100"
              }
            >
              Mantra
            </span>
          </label>
          {isMantra ? (
            <div className="flex items-center gap-2">
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Por
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Dd
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Dc
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                B
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Ds
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                M
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                C
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                E
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                W
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                T
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                A
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Pc
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button className="text-gray-100 border-2 rounded-lg w-10 h-10 cursor-pointer">
                Por
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-11 h-10 cursor-pointer">
                Def
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-11 h-10 cursor-pointer">
                Cen
              </button>
              <button className="text-gray-100 border-2 rounded-lg w-11 h-10 cursor-pointer">
                Att
              </button>
            </div>
          )}
        </div>
        <select className="flex-1 h-14 bg-green-800 text-xl text-gray-100 border-2 rounded-lg border-green-900 p-2">
          <option>Inter</option>
          <option>Milan</option>
          <option>Juventus</option>
          <option>Napoli</option>
          <option>Atalanta</option>
        </select>
      </div>
    </main>
  );
}
