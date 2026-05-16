function App() {
  const teamData = {
    name: "U.S. Borgo Rosso",
    budget: 1250,
    stadium: "Stadio Olimpico",
    level: 2
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <header className="mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-4xl font-black text-green-400 uppercase tracking-tighter">
          Fanta Manager <span className="text-white">2026</span>
        </h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Budget */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <p className="text-slate-400 text-sm uppercase font-bold">Budget Rimanente</p>
          <p className="text-3xl font-mono text-yellow-400">{teamData.budget} Mln €</p>
        </div>

        {/* Card Stadio */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <p className="text-slate-400 text-sm uppercase font-bold">Stadio</p>
          <p className="text-xl">{teamData.stadium}</p>
          <div className="mt-2 w-full bg-slate-800 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
          </div>
          <p className="text-xs text-slate-500 mt-1">Livello {teamData.level} / 5</p>
        </div>

        {/* Card Squadra */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-green-500/20 shadow-xl bg-gradient-to-br from-slate-900 to-green-900/10">
          <p className="text-slate-400 text-sm uppercase font-bold">Team</p>
          <p className="text-2xl font-bold italic">{teamData.name}</p>
        </div>
      </main>

      <div className="mt-10 p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm">
        Sincronizzazione completata: Benvenuto a bordo, Presidente.
      </div>
    </div>
  );
}

export default App;