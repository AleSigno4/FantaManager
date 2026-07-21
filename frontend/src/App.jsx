import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-green-950 h-screen overflow-hidden">
      <div className="flex w-full h-full">
        
        {/* Barra di navigazione laterale */}
        <nav
          className={`bg-green-900 shadow-2xl flex flex-col h-screen transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? "w-64 p-6 border-r-4 border-emerald-700 opacity-100" 
              : "w-0 p-0 border-r-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-52 flex flex-col h-full flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">
                Menu
              </h2>
              <button
                className="text-white px-2 py-3 rounded hover:bg-green-500 transition-colors cursor-pointer"
                aria-label="Chiudi menu"
                onClick={() => setIsOpen(false)}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <ul className="space-y-2 flex-1 flex flex-col overflow-y-auto">
              <li>
                <Link to="/" className="text-white text-2xl hover:text-green-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/lineup" className="text-white text-2xl hover:text-green-300">
                  Lineup
                </Link>
              </li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Injuries</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Teams</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Calendar</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Leaderboard</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">League Stats</a></li>
              <li>
                <Link to="/players" className="text-white text-2xl hover:text-green-300">
                  Player List
                </Link>
              </li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Transfer Markets</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">Free Agents</a></li>
              <li><a href="#" className="text-white text-2xl hover:text-green-300">News</a></li>
              <li className="mt-auto pt-4">
                <a href="#" className="text-white text-2xl hover:text-green-300">Logout</a>
              </li>              
            </ul>
          </div>
        </nav>

        {/* Header + Pagine dinamiche */}
        <div className="flex-1 flex flex-col h-screen overflow-y-auto transition-all duration-300 ease-in-out">
          <header className="flex justify-between items-center p-4">
            {!isOpen && (
              <button
                className="text-white px-2 py-3 rounded hover:bg-green-500 transition-colors cursor-pointer"
                aria-label="Apri menu"
                onClick={() => setIsOpen(true)}
              >
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
            )}
            <h1 className="text-4xl font-black text-green-400 uppercase tracking-tighter ml-auto">
              Fanta Manager <span className="text-white">2026</span>
            </h1>
          </header>

          <Outlet />

        </div>
      </div>
    </div>
  );
}

export default App;