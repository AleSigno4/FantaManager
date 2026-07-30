import teams from "../mocks/leaderboard.json";
import { getRankColor } from "../utils/helpers.js";
import serieATeams from "../mocks/serieA_standing.json";
import topScorer from "../mocks/top_scorer.json";
import topAssist from "../mocks/top_assist.json";

export default function Leaderboard() {
  const maxPt = Math.max(...teams.map((t) => t.total_points));

  return (
    <div className="flex mx-8 gap-12">
      <div className="flex-2 h-full w-full">
        <h2 className="text-white text-2xl font-bold text-center">
          Classifica [nomeLega]
        </h2>
        <div className="rounded-2xl border-4 border-gray-900 mt-4 overflow-hidden">
          <table className="w-full rounded-2xl border-collapse">
            <thead className="text-lg font-bold bg-blue-400">
              <tr>
                <th className="p-2">Pos.</th>
                <th className="p-2">Squadra</th>
                <th className="p-2">PG</th>
                <th className="p-2">W</th>
                <th className="p-2">D</th>
                <th className="p-2">L</th>
                <th className="p-2">GLS</th>
                <th className="p-2">Punti</th>
                <th className="p-2">Punti totali</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {teams.map((team) => (
                <tr
                  key={team.id}
                  className="border-b border-gray-500 hover:bg-gray-200 text-lg"
                >
                  <td className="p-2 text-center font-bold">
                    <span
                      className={`rounded-full w-8 h-8 inline-flex items-center justify-center ${getRankColor(team.rank)}`}
                    >
                      {team.rank}
                    </span>
                  </td>{" "}
                  <td className="p-2 text-center font-bold">{team.team_id}</td>
                  <td className="p-2 text-center text-gray-500">
                    {team.played}
                  </td>
                  <td className="p-2 text-center text-gray-500">{team.won}</td>
                  <td className="p-2 text-center text-gray-500">
                    {team.drawn}
                  </td>
                  <td className="p-2 text-center text-gray-500">{team.lost}</td>
                  <td className="p-2 text-center text-gray-500">
                    {team.total_score_for}:{team.total_score_against}
                  </td>
                  <td className="p-2 text-center font-bold">{team.points}</td>
                  <td
                    className={`p-2 text-center font-semibold ${team.total_points === maxPt && "text-blue-500 font-bold!"}`}
                  >
                    {team.total_points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-1 h-full w-full">
        <h3 className="text-white text-2xl font-bold text-center">
          Classifiche generali
        </h3>
        <div>
          <h4 className="text-white text-xl font-bold">Classifica Serie A</h4>
          <div className="rounded-2xl border-4 border-gray-900 overflow-hidden max-h-[22.5vh] overflow-y-auto custom-scrollbar">
            <table className="w-full rounded-2xl border-collapse">
              <thead className="font-bold bg-blue-400 top-0 sticky">
                <tr>
                  <th className="p-2">Pos.</th>
                  <th className="p-2">Squadra</th>
                  <th className="p-2">PG</th>
                  <th className="p-2">GLS</th>
                  <th className="p-2">Punti</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 text-sm">
                {serieATeams.map((team) => (
                  <tr
                    key={team.id}
                    className="border-b border-gray-500 bg hover:bg-gray-200"
                  >
                    <td className="p-2 text-center font-bold">{team.id}</td>
                    <td className="p-2 text-center font-bold">{team.team_name}</td>
                    <td className="p-2 text-center text-gray-600">{team.played}</td>
                    <td className="p-2 text-center text-gray-600">{team.goals_for}:{team.goals_against}</td>
                    <td className="p-2 text-center font-bold">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 className="text-white text-xl font-bold">Classifica Marcatori</h4>
          <div className="rounded-2xl border-4 border-gray-900 overflow-hidden max-h-[22.5vh] overflow-y-auto custom-scrollbar">
            <table className="w-full rounded-2xl border-collapse">
              <thead className="font-bold bg-blue-400 top-0 sticky">
                <tr>
                  <th className="p-2">Gioc.</th>
                  <th className="p-2">Squadra</th>
                  <th className="p-2">Gol</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 text-sm">
                {topScorer.map((team) => (
                  <tr
                    key={team.id}
                    className="border-b border-gray-500 bg hover:bg-gray-200"
                  >
                    <td className="p-2 text-center font-bold">{team.player_name}</td>
                    <td className="p-2 text-center font-bold">{team.team_name}</td>
                    <td className="p-2 text-center font-bold">{team.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 className="text-white text-xl font-bold">Classifica Assist</h4>
          <div className="rounded-2xl border-4 border-gray-900 overflow-hidden max-h-[22.5vh] overflow-y-auto custom-scrollbar">
            <table className="w-full rounded-2xl border-collapse">
              <thead className="font-bold bg-blue-400 top-0 sticky">
                <tr>
                  <th className="p-2">Gioc.</th>
                  <th className="p-2">Squadra</th>
                  <th className="p-2">Assist</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 text-sm">
                {topAssist.map((team) => (
                  <tr
                    key={team.id}
                    className="border-b border-gray-500 bg hover:bg-gray-200"
                  >
                    <td className="p-2 text-center font-bold">{team.player_name}</td>
                    <td className="p-2 text-center font-bold">{team.team_name}</td>
                    <td className="p-2 text-center font-bold">{team.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
