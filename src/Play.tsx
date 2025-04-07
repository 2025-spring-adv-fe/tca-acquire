import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameResult } from "./GameResults";
import React from "react";


interface PlayProps {
  addNewGameResult: (r: GameResult) => void;
  setTitle: (t: string) => void;
}

 export const Play: React.FC<PlayProps> = ({
  addNewGameResult,
  setTitle
}) => {

  useEffect(
    () => setTitle("Play")
    , []
  );

  const nav = useNavigate();

  const [turnNumber, setTurnNumber] = useState(1);

  return(
  <>
  <h4 className="text-lg font-semibold">
    Turn # {turnNumber}
    <button 
      className="btn btn xs-outline btn-light ml-4"
      onClick={
        () => {
          setTurnNumber(turnNumber + 1)
        }
      }
    >
      +
    </button>
  </h4>
  <button className="btn btn active btn-secondary btn-lg mt-4"
    onClick= {
      () => {
        addNewGameResult({
          winner: "Barbie"
          , players: [
            "Barbie"
            , "Ken"
          ]
        })
        nav(-2)
      }
    }
  >
    Done</button>
  </>
  );
};