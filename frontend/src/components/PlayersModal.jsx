import players from "../mocks/players.json";
import { roleColorsMantra } from "../utils/roles";  //importare anche il classic, fare un apposito controllo sul filtro

const iconStatus = (status) => {
  if (status === "injured")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="red"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-first-aid-kit"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
        <path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
        <path d="M10 14h4" />
        <path d="M12 12v4" />
      </svg>
    );
  else if (status === "suspended")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="red"
        className="icon icon-tabler icons-tabler-filled icon-tabler-rectangle-vertical"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 2h-10a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
      </svg>
    );
  else return null;
};

export default function PlayersModal({ slotChosen, onSelectPlayer, onClose }) {
  const myPlayers = players.filter((player) => {
    if (slotChosen.position === "All") return true;
    return slotChosen.position.split("/").includes(player.role);
  });

  return (
    <div className="fixed inset-0 z-50 flex bg-white/50 items-center justify-center">
      <div className="bg-white w-1/2 h-3/4 rounded-2xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl font-bold">Giocatori</h3>
          <button
            className="text-2xl text-red-600 font-bold cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          {myPlayers.length > 0 ? (
            myPlayers.map((player) => (
              <button
                key={player.id}
                className="flex flex-row gap-2 w-full p-2 border-b-gray-400 border-b-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  onSelectPlayer(player);
                  onClose();
                }}
              >
                <div className="w-1/2 flex flex-row items-center gap-2">
                <span
                  className={`rounded-full w-8 h-8 inline-flex items-center justify-center 
                                        ${roleColorsMantra[player.role][0]}`}
                >
                  {player.role}
                </span>
                <h4 className="text-xl font-bold">{player.last_name}</h4>
                <h5 className="font-semibold text-gray-700 items-end">
                  Inter <span className="text-gray-400">vs Roma</span>
                </h5>
                {iconStatus(player.status)}
                </div>
                <div className="w-1/2 flex-1 flex-col">
                  <h5 className="">70%</h5>
                  <div className="w-full border border-gray-500 rounded-2xl h-1 overflow-hidden">
                    <div
                      className="bg-green-600 h-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <h4 className="text-2xl font-bold text-gray-600 flex flex-col items-center justify-center h-full">
              <span className="block mx-auto">
                Non ci sono giocatori disponibili
              </span>
              <span className="block mx-auto">per questo ruolo.</span>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
