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

  const typeFanta = "Mantra";

  useEffect(() => {
    createLineup(module);
  }, []);

  const createLineup = (mod) => {
    setModule(mod);
    if (typeFanta === "Classic") {
      setLineup(
        classicModules[mod].map((role, indice) => ({
          type: "starter",
          index: indice + 1,
          position: role,
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
        mantraModules[mod].map((role, indice) => ({
          type: "starter",
          index: indice + 1,
          position: role,
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
    <main className="flex flex-row items-center gap-6 px-4">
      <div className="flex-5 bg-amber-500 h-full"></div>
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
            <h3 className="text-gray-100 font-bold text-xl">Capitano</h3>
            <button
              className="bg-white/40 border-2 border-gray-200 rounded-lg w-full font-bold p-2 cursor-pointer"
              onClick={() => handleSlotClick({
                type: "captain",
                index: 0,
                position: "All",
                team_player_id: null,
              })}
            >
              <h3 className="text-2xl text-gray-100">
                {captain ? captain.last_name : "+"}
              </h3>
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-gray-100 font-bold text-xl">Vicecapitano</h3>
            <button
              className="bg-white/40 border-2 border-gray-200 rounded-lg w-full font-bold p-2 cursor-pointer"
              onClick={() => handleSlotClick({
                type: "vice-captain",
                index: 0,
                position: "All",
                team_player_id: null,
              })}
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
