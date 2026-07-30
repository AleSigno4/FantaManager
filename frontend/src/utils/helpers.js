export function getColorBar(width) {
  if (width < 25) return "bg-gray-500";
  else if (width < 50) return "bg-red-500";
  else if (width < 75) return "bg-yellow-500";
  else return "bg-green-600";
}

export function getRankColor(rank) {
  if (rank === 1) return "bg-amber-400 text-white";
  else if (rank === 2) return "bg-slate-400 text-white";
  else if (rank === 3) return "bg-orange-800 text-white";
  else return;
}
