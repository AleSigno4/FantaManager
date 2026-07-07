import teams from "./mocks/teams.json";

function App() {
  return (
    <div className="bg-green-950 min-h-screen">
      <header className="flex justify-between items-center p-4">
        <button className="text-white px-2 py-3 rounded hover:bg-green-500 transition-colors cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-4xl font-black text-green-400 uppercase tracking-tighter">
          Fanta Manager <span className="text-white">2026</span>
        </h1>
      </header>
      <main className="flex flex-col items-center w-full gap-6 px-4 pb-8">
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="bg-green-900 p-4 rounded-lg border-3 border-emerald-700 shadow-lg">
            <h2 className="text-lg font-bold text-white">Budget</h2>
            <h2 className="text-2xl font-bold text-green-300">
              {teams[0].budget}Mln
            </h2>
          </div>
          <div className="bg-green-900 p-4 rounded-lg border-3 border-emerald-700 shadow-lg">
            <h2 className="text-lg font-bold text-white">Ranking</h2>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-300">1°</h2>
                <h3 className="text-gray-300">Position</h3>
                {/* Hardcoded */}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-300">31</h2>
                <h3 className="text-gray-300">Points</h3>
                {/* Hardcoded */}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-300">2431,5</h2>
                <h3 className="text-gray-300">Total Points</h3>
                {/* Hardcoded */}
              </div>
            </div>
          </div>
          <div className="bg-green-900 p-4 rounded-lg border-3 border-emerald-700 shadow-lg">
            <h2 className="font-bold text-white"></h2>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-900 p-6 rounded-lg border-3 border-emerald-700 shadow-lg">
              <h2 className="text-2xl font-bold text-white">Next Match</h2>
            </div>
            <div className="bg-green-900 p-6 rounded-lg border-3 border-emerald-700 shadow-lg">
              <h2 className="text-2xl font-bold text-white">Past Match</h2>
            </div>
            <div className="bg-green-900 p-6 rounded-lg border-3 border-emerald-700 shadow-lg">
              <h2 className="text-2xl font-bold text-white">Structures</h2>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="grid grid-rows-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 24 24"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building-stadium"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
                    <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
                    <path d="M15 6h4v-3h-4v7" />
                    <path d="M7 6h4v-3h-4v7" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">
                    Stadium{" "}
                    <span className="text-gray-400">
                      LV{teams[0].stadium_level}
                    </span>
                  </h3>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 24 24"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l18 0" />
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                    <path d="M5 21l0 -10.15" />
                    <path d="M19 21l0 -10.15" />
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">
                    Store{" "}
                    <span className="text-gray-400">
                      LV{teams[0].store_level}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="grid grid-rows-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 24 24"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-building"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l18 0" />
                    <path d="M9 8l1 0" />
                    <path d="M9 12l1 0" />
                    <path d="M9 16l1 0" />
                    <path d="M14 8l1 0" />
                    <path d="M14 12l1 0" />
                    <path d="M14 16l1 0" />
                    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">
                    HQ{" "}
                    <span className="text-gray-400">LV{teams[0].hq_level}</span>
                  </h3>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 24 24"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-report-money"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                    <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                    <path d="M12 17v1m0 -8v1" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">
                    Sponsor{" "}
                    <span className="text-gray-400">LV{teams[0].hq_level}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
