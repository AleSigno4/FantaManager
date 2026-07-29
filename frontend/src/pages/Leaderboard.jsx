export default function Leaderboard() {
  return (
    <div className="flex m-4 gap-12">
      <div className="flex-2 h-full w-full">
        <h2 className="text-white text-3xl font-bold text-center">
          Classifica [nomeLega]
        </h2>
        <div className="rounded-2xl border-2 border-green-900 mt-4">
          <table className="w-full">
            <thead className="text-lg font-bold rounded-2xl bg-gray-300">
              <tr>
                <th className="p-4">Pos.</th>
                <th className="p-4">Squadra</th>
                <th className="p-4">PG</th>
                <th className="p-4">W</th>
                <th className="p-4">D</th>
                <th className="p-4">L</th>
                <th className="p-4">Punti</th>
                <th className="p-4">Punti totali</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div className="flex-1 h-full w-full">
        <h3 className="text-white text-2xl font-bold text-center">
          Classifiche generali
        </h3>
        <div>
          <h4 className="text-white text-xl font-bold">
            Classifica Serie A
          </h4>
          <table className="text-white">
            <thead className="text-lg font-bold">
              <tr>
                <th className="p-4">Pos.</th>
                <th className="p-4">Squadra</th>
                <th className="p-4">Punti</th>
              </tr>
            </thead>
          </table>
        </div>
        <div>
            <h4 className="text-white text-xl font-bold">
            Classifica Marcatori
          </h4>
          <table className="text-white">
            <thead className="text-lg font-bold">
              <tr>
                <th className="p-4">Gioc.</th>
                <th className="p-4">Squadra</th>
                <th className="p-4">#Gol</th>
              </tr>
            </thead>
          </table>
        </div>
        <div>
            <h4 className="text-white text-xl font-bold">
            Classifica Assistman
          </h4>
          <table className="text-white">
            <thead className="text-lg font-bold">
              <tr>
                <th className="p-4">Gioc.</th>
                <th className="p-4">Squadra</th>
                <th className="p-4">#Assist</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
