import teams from "../mocks/teams.json";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full gap-6 px-4 pb-8">
      <div className="grid grid-cols-3 gap-4 w-full">
        {/* Card 1: Budget */}
        <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg flex flex-col">
          <h2 className="text-lg font-bold text-white">Budget</h2>
          <div className="flex-1 flex items-center mt-4">
            <h3 className="text-4xl font-bold text-green-300">
              {teams[0].budget}Mln
            </h3>
          </div>
        </div>
        {/* Card 2: Ranking */}
        <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg flex flex-col">
          <h2 className="text-lg font-bold text-white">Ranking</h2>
          <div className="grid grid-cols-3 gap-4 mt-4 flex-1 items-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-300">1°</h2>
              <h3 className="text-gray-300">Position</h3>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-300">31</h2>
              <h3 className="text-gray-300">Points</h3>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-300">2431,5</h2>
              <h3 className="text-gray-300">Total Points</h3>
            </div>
          </div>
        </div>
        <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg">
          <h2 className="text-lg font-bold text-white"></h2>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg">
            <h2 className="text-2xl font-bold text-white">
              Next Match <span className="text-red-500">1d 21h 15min</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center justify-center mt-4">
                <img
                  src={teams[0].logo}
                  alt={teams[0].name}
                  className="w-36 h-48 object-contain"
                />
                <h3 className="text-lg font-bold text-white">
                  {teams[0].name}
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <h3 className="text-5xl font-bold text-white">VS</h3>
                <Link to="/lineup" className="mt-8 bg-green-600 text-white text-lg text-center font-bold px-4 py-2 rounded hover:bg-green-500 transition-colors cursor-pointer">
                  Inserisci formazione
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <img
                  src={teams[1].logo}
                  alt={teams[1].name}
                  className="w-36 h-48 object-contain"
                />
                <h3 className="text-lg font-bold text-white">
                  {teams[1].name}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg">
            <h2 className="text-2xl font-bold text-white">Past Match</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center justify-center mt-4">
                <img
                  src={teams[1].logo}
                  alt={teams[1].name}
                  className="w-36 h-48 object-contain"
                />
                <h3 className="text-lg font-bold text-white">
                  {teams[1].name}
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <h3 className="text-5xl font-bold text-white mb-4">1 - 0</h3>
                <h4 className="font-bold text-lg text-gray-300">67 - 63</h4>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <img
                  src={teams[2].logo}
                  alt={teams[2].name}
                  className="w-36 h-48 object-contain"
                />
                <h3 className="text-lg font-bold text-white">
                  {teams[2].name}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-green-900 p-6 rounded-lg border-4 border-emerald-700 shadow-lg">
            <h2 className="text-2xl font-bold text-white">Club</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col items-center text-center justify-center group">
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={110}
                    height={110}
                    viewBox="0 0 24 24"
                    color="lightgray"
                    fill="none"
                    strokeWidth={0.75}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building-stadium group-hover:stroke-green-400 transition-colors duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
                    <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
                    <path d="M15 6h4v-3h-4v7" />
                    <path d="M7 6h4v-3h-4v7" />
                  </svg>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    Stadium{" "}
                    <span className="text-gray-400">
                      LV{teams[0].stadium_level}
                    </span>
                  </h3>
                </button>
              </div>
              <div className="flex flex-col items-center text-center justify-center group">
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={110}
                    height={110}
                    viewBox="0 0 24 24"
                    color="lightgray"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building-store group-hover:stroke-green-400 transition-colors duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l18 0" />
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                    <path d="M5 21l0 -10.15" />
                    <path d="M19 21l0 -10.15" />
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                  </svg>
                </button>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  Store{" "}
                  <span className="text-gray-400">
                    LV{teams[0].store_level}
                  </span>
                </h3>
              </div>
              <div className="flex flex-col items-center text-center justify-center group">
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={110}
                    height={110}
                    viewBox="0 0 24 24"
                    color="lightgray"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building group-hover:stroke-green-400 transition-colors duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
                    <path d="M16 8h2c1 0 2 1 2 2v11" />
                    <path d="M3 21h18" />
                    <path d="M10 12v.01" />
                    <path d="M10 16v.01" />
                    <path d="M10 8v.01" />
                    <path d="M7 12v.01" />
                    <path d="M7 16v.01" />
                    <path d="M7 8v.01" />
                    <path d="M17 12v.01" />
                    <path d="M17 16v.01" />
                  </svg>
                </button>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  HQ{" "}
                  <span className="text-gray-400">LV{teams[0].hq_level}</span>
                </h3>
              </div>
              <div className="flex flex-col items-center text-center justify-center group">
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={110}
                    height={110}
                    viewBox="0 0 24 24"
                    color="lightgray"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-report-money group-hover:stroke-green-400 transition-colors duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                    <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                    <path d="M12 17v1m0 -8v1" />
                  </svg>
                </button>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  Sponsor
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
