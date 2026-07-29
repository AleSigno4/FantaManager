import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import PlayerList from "./pages/PlayerList.jsx";
import Lineup from "./pages/Lineup.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "players",
        element: <PlayerList />,
      },
      {
        path: "lineup",
        element: <Lineup />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
