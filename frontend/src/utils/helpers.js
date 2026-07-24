export default function setColorBar(width) {
    if(width < 25)
      return "bg-gray-500";
    else if(width < 50)
      return "bg-red-500";
    else if(width < 75)
      return "bg-yellow-500";
    else
      return "bg-green-600";
  }