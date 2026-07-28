import PlayerSlot from "../components/PlayerSlot";
import { classicModules, mantraModules } from "../utils/modules.js";
import PlayersModal from "../components/PlayersModal";

import { useState, useEffect } from "react";

export default function Lineup() {
  const [module, setModule] = useState("4-4-2");
  const [captain, setCaptain] = useState("");
  const [viceCaptain, setViceCaptain] = useState("");
  const [lineup, setLineup] = useState([]);
  const [benchLineup, setBenchLineup] = useState([]);

  const [slotChosen, setSlotChosen] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const typeFanta = "Mantra";

  useEffect(() => {
    createLineup(module);
  }, []);

  const createLineup = (mod) => {
    setModule(mod);
    if (typeFanta === "Classic") {
      setLineup(
        classicModules[mod].map((slotData, indice) => ({
          type: "starter",
          index: indice + 1,
          position: slotData.position,
          x: slotData.x,
          y: slotData.y,
          team_player_id: null,
        })),
      );
      setBenchLineup(
        Array.from({ length: 8 }, (_, indice) => ({
          type: "bench",
          index: indice + 1,
          position: "All",
          team_player_id: null,
        })),
      );
    } else {
      setLineup(
        mantraModules[mod].map((slotData, indice) => ({
          type: "starter",
          index: indice + 1,
          position: slotData.position,
          x: slotData.x,
          y: slotData.y,
          team_player_id: null,
        })),
      );
      setBenchLineup(
        Array.from({ length: 12 }, (_, indice) => ({
          type: "bench",
          index: indice + 1,
          position: "All",
          team_player_id: null,
        })),
      );
    }
  };

  const handleSlotClick = (slotClicked) => {
    setSlotChosen(slotClicked);
  };

  const handleClose = () => {
    setSlotChosen(null);
  };

  const handleSelectPlayer = (player) => {
    if (slotChosen.type === "captain") {
      setCaptain(player);
    } else if (slotChosen.type === "vice-captain") {
      setViceCaptain(player);
    } else {
      const updateSlot = (slot) => {
        if (slot.index === slotChosen.index) {
          return { ...slot, team_player_id: player.id, player: player };
        }
        return slot;
      };

      if (slotChosen.type === "starter") {
        setLineup(lineup.map(updateSlot));
      } else {
        setBenchLineup(benchLineup.map(updateSlot));
      }
    }
    setSlotChosen(null);
  };

  return (
    <main className="flex flex-1 min-h-0 flex-row gap-6 px-4">
      <div className="flex-5 h-full ml-4 flex flex-col min-h-0">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-100 text-3xl font-bold mb-4">Titolari</h2>
          <div className="flex gap-4 items-center">
            <h3 className="text-gray-300 text-xl font-semibold">Modulo:</h3>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex bg-white/40 ${isDropdownOpen ? "rounded-t-lg" : "rounded-lg"} text-lg text-gray-100 font-bold p-2 gap-2 items-center`}
              >
                {module}
                <span className="inline-block">
                  {isDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 15l6 -6l6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  )}
                </span>
              </button>
              {isDropdownOpen && (
                <div className="bg-white/40 rounded-b-lg text-lg text-gray-100 font-bold text-center absolute w-full top-full left-0 z-50">
                  {typeFanta === "Classic"
                    ? Object.keys(classicModules).map((mod) => (
                        <button
                          key={mod}
                          className="hover:bg-white/20 cursor-pointer w-full"
                          onClick={() => {
                            createLineup(mod);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {mod}
                        </button>
                      ))
                    : Object.keys(mantraModules).map((mod) => (
                        <button
                          key={mod}
                          className="hover:bg-white/20 cursor-pointer w-full"
                          onClick={() => {
                            createLineup(mod);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {mod}
                        </button>
                      ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white/50 flex-1 min-h-0 overflow-hidden relative mb-4">
          {lineup.map((slot) => {
            return (
              <div
                key={slot.index}
                className="w-[10%]"
                style={{
                  position: "absolute",
                  top: `${slot.y}%`,
                  left: `${slot.x}%`,
                }}
              >
                <PlayerSlot
                  slot={slot}
                  onSlotClick={() => handleSlotClick(slot)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-3 h-full p-4">
        <h2 className="text-gray-100 text-2xl font-bold mb-4">Panchina</h2>
        <div className="grid grid-cols-4 gap-4">
          {benchLineup.map((slot) => {
            return (
              <PlayerSlot
                key={slot.index}
                slot={slot}
                onSlotClick={() => handleSlotClick(slot)}
              />
            );
          })}
        </div>
        <div className="flex flex-row w-full gap-4 mt-4">
          <div className="flex-1">
            <h3 className="text-gray-100 font-bold text-xl mb-1">Capitano</h3>
            <button
              className="bg-white/40 border-2 border-gray-200 rounded-lg w-full font-bold p-2 cursor-pointer"
              onClick={() =>
                handleSlotClick({
                  type: "captain",
                  index: 0,
                  position: "All",
                  team_player_id: null,
                })
              }
            >
              <h3 className="text-2xl text-gray-100">
                {captain ? captain.last_name : "+"}
              </h3>
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-gray-100 font-bold text-xl mb-1">
              Vicecapitano
            </h3>
            <button
              className="bg-white/40 border-2 border-gray-200 rounded-lg w-full font-bold p-2 cursor-pointer"
              onClick={() =>
                handleSlotClick({
                  type: "vice-captain",
                  index: 0,
                  position: "All",
                  team_player_id: null,
                })
              }
            >
              <h3 className="text-2xl text-gray-100">
                {viceCaptain ? viceCaptain.last_name : "+"}
              </h3>
            </button>
          </div>
        </div>
      </div>

      {slotChosen && (
        <PlayersModal
          slotChosen={slotChosen}
          onSelectPlayer={handleSelectPlayer}
          onClose={handleClose}
        />
      )}
    </main>
  );
}
