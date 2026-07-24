import { roleColorsMantra } from "../utils/roles";
import { setColorBar } from "../utils/helpers";


export default function PlayerSlot({ slot, onSlotClick }) {
  const tempWidth = 80;

  return (
    <button
      className="flex flex-col aspect-13/14 items-center justify-center bg-white/40 rounded-xl border-2 border-black text-center cursor-pointer"
      onClick={onSlotClick}
    >
      {slot?.player ? (
        <>
          <div className="flex flex-row pt-1.5 h-5/9">
            <div className="flex flex-col">
              <span
                className={`rounded-full w-6 h-6 inline-flex items-center justify-center font-semibold text-sm ${roleColorsMantra[slot.player.role][0]}`}
              >
                {slot.player.role}
              </span>
            </div>
            <img
              src="assets/lautaro.png"
              alt="lautaro icon"
              className="block mx-auto h-full object-contain"
            />
          </div>
          <h3 className="text-gray-100 font-bold">{slot.player.last_name}</h3>
          <h4 className="text-gray-100 font-semibold text-sm">
            Inter - Verona
          </h4>
          <div className="flex flex-row w-2/3 gap-2 items-center">
            <h5 className="text-gray-100 text-xs font-semibold">{tempWidth}%</h5>
            <div className="border bg-gray-100 rounded-2xl w-2/3 h-1 overflow-hidden">
              <div
                className={`${setColorBar(tempWidth)} h-full`}
                style={{ width: tempWidth+"%"}}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-5xl font-bold text-gray-200">+</p>
      )}
    </button>
  );
}
