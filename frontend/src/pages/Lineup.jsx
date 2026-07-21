import PlayerCard from "../components/PlayerCard";

export default function Lineup() {
  return (
    <main className="flex flex-row items-center gap-6 px-4 pb-8">
      <div className="flex-5 bg-amber-50 h-full"></div>
      <div className="flex-3 bg-blue-500 h-full p-4">
        <h2 className="text-white text-2xl font-bold mb-4">Panchina</h2>
        <div className="grid grid-cols-4 gap-4">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
        <div className="flex flex-row w-full gap-4">
            <div className="flex-1">
                <h3>Capitano</h3>
              <h3 className="bg-white font-bold">Lautaro</h3>
            </div>
            <div className="flex-1">
                <h3>Vicecapitano</h3>
              <h3 className="bg-white font-bold">Lautaro</h3>
            </div>
          </div>
      </div>
    </main>
  );
}
