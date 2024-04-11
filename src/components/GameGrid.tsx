import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Divider } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
const GameGrid = () => {
  const { games, error } = useGames();

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
