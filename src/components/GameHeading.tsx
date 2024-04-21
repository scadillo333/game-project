import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gamequery: GameQuery;
}

const GameHeading = ({ gamequery }: Props) => {
  const heading = `${gamequery.platform?.name || ""} ${
    gamequery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
