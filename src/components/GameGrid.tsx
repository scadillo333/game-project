import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Divider } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof AbortController) return;
        seterror(err.nessage);
      });
    return () => controller.abort();
  }),
    [];

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
