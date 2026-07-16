import { useState, useMemo } from "react";
import players from "../mocks/players.json";
import players_stats from "../mocks/player_stats.json";
import {
  roleColorsMantra,
  roleColorsClassic,
  roleClassic,
} from "../utils/roles.js";

const unionJson = (players, players_stats) => {
  return players.map((player) => {
    const playerStats = players_stats.find(
      (stat) => stat.player_id === player.id,
    );
    return {
      ...player,
      stats: playerStats || {
        goals: 0,
        assists: 0,
        yellow_cards: 0,
        red_cards: 0,
        avg_vote: 0,
        avg_fantavote: 0,
        quotazione: 0,
      },
    };
  });
};

export default function PlayerList() {
  const [isMantra, setIsMantra] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [roleInput, setRoleInput] = useState([]);
  const [teamInput, setTeamInput] = useState("");

  const rolesClassic = Object.keys(roleClassic);
  const rolesMantra = Object.keys(roleColorsMantra);
  const playersWithStats = useMemo(() => unionJson(players, players_stats), []); //players, players_stats da mettere come dipendenze con i dati reali

  const filteredPlayers = playersWithStats.filter(
    (player) =>
      (roleInput.length === 0 || roleInput.includes(player.role)) &&
      player.last_name.toLowerCase().includes(nameInput.toLowerCase()),
  );
  return (
    <main className="flex flex-col w-full px-4 pb-8">
      <div className="flex justify-between w-full items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Cerca giocatore..."
          className="flex-1 bg-green-800 h-14 text-xl text-gray-100 placeholder-gray-100 border-2 rounded-lg border-green-900 p-2"
          onChange={(e) => setNameInput(e.target.value)}
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
              onChange={() => {
                setIsMantra(!isMantra);
                setRoleInput([]);
              }}
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
              {rolesMantra.map((role) => (
                <button
                  key={role}
                  className={`text-gray-100 rounded-full w-10 h-10 cursor-pointer inline-flex items-center
                    justify-center ${roleInput.includes(role) ? roleColorsMantra[role][0] : roleColorsMantra[role][1]}`}
                  onClick={() => {
                    !roleInput.includes(role)
                      ? setRoleInput([...roleInput, role])
                      : setRoleInput(
                          roleInput.filter((tempRole) => tempRole != role),
                        );
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {rolesClassic.map((role) => (
                <button
                  key={role}
                  className={`text-gray-100 rounded-full w-10 h-10 cursor-pointer inline-flex items-center 
                    justify-center ${roleInput.includes(roleClassic[role]) ? roleColorsClassic[role][0] : roleColorsClassic[role][1]}`}
                  onClick={() => {
                    !roleInput.includes(roleClassic[role][0])
                      ? setRoleInput([...roleInput, ...roleClassic[role]])
                      : setRoleInput(
                          roleInput.filter(
                            (tempRole) => !roleClassic[role].includes(tempRole),
                          ),
                        );
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
        <select
          className="flex-1 h-14 bg-green-800 text-xl text-gray-100 border-2 rounded-lg border-green-900 p-2"
          onChange={(e) => setTeamInput(e.target.value)}
        >
          <option>Inter</option>
          <option>Milan</option>
          <option>Juventus</option>
          <option>Napoli</option>
          <option>Atalanta</option>
        </select>
      </div>
      <div className="overflow-hidden rounded-2xl border-2 border-green-900">
        <table className="w-full bg-green-700 text-gray-100">
          <thead className="bg-green-800 text-lg">
            <tr>
              <th className="p-2">Ruolo</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Squadra</th>
              <th className="p-2">Gol fatti</th>
              <th className="p-2">Assist</th>
              <th className="p-2">Ammonizioni</th>
              <th className="p-2">Espulsioni</th>
              <th className="p-2">Media voto</th>
              <th className="p-2">Media fantavoto</th>
              <th className="p-2">Quotazione</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <tr
                  key={player.id}
                  className="border-b border-green-800 hover:bg-green-900"
                >
                  <td className="p-2 text-center font-bold">
                    <span
                      className={`rounded-full w-8 h-8 inline-flex items-center justify-center 
                        ${roleColorsMantra[player.role][0]}`}
                    >
                      {player.role}
                    </span>
                  </td>
                  <td className="p-2 text-center font-bold">
                    {player.last_name}
                  </td>
                  <td className="p-2 text-center font-bold">
                    {player.team_serie_a_id}
                  </td>
                  <td className="p-2 text-center text-gray-300">
                    {player.stats.goals}
                  </td>
                  <td className="p-2 text-center text-gray-300">
                    {player.stats.assists}
                  </td>
                  <td className="p-2 text-center text-gray-300">
                    {player.stats.yellow_cards}
                  </td>
                  <td className="p-2 text-center text-gray-300">
                    {player.stats.red_cards}
                  </td>
                  <td className="p-2 text-center text-gray-300">
                    {player.stats.avg_vote}
                  </td>
                  <td className="p-2 text-center font-bold">
                    {player.stats.avg_fantavote}
                  </td>
                  <td className="p-2 text-center font-bold">
                    {player.stats.quotazione}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={10}
                  className="text-2xl font-bold text-gray-200 text-center"
                >
                  Nessun calciatore trovato.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
