import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameResult } from "./GameResults";
import React from "react";


interface PlayProps {
  addNewGameResult: (r: GameResult) => void;
  setTitle: (t: string) => void;
  currentPlayers: string[];
}

 export const Play: React.FC<PlayProps> = ({
  addNewGameResult
  , setTitle
  , currentPlayers
}) => {

  useEffect(
    () => setTitle("Play")
    , []
  );

  const nav = useNavigate();

  const [turnNumber, setTurnNumber] = useState(1);

  const [startTimestamp] = useState(
    new Date().toISOString()
  )

  return(
  <>
  <h4 className="text-lg font-semibold">
    Turn # {turnNumber}
    <button 
      className="btn btn-soft btn-light ml-4"
      onClick={
        () => {
          setTurnNumber(turnNumber + 1)
        }
      }
    >
      +
    </button>
  </h4>

  <div 
    className="grid grid-cols2 gap-2 mt-4"
  >
    {
      currentPlayers.map(
        x => (
          <button 
            key={x}
            className="btn btn active btn-secondary btn-lg mt-4"
            onClick= {
              () => {
                addNewGameResult({
                  winner: x
                  , players: currentPlayers
                  ,start: startTimestamp
                  , end: new Date().toISOString()
                  , turnCount: turnNumber
                });
                nav(-2)
              }
            }
          >
            {x} Won
          </button>
        )
      )
    }
  </div>
  <button
            className="btn btn-soft mb-4 mt-4"
            onClick={() => nav(-1)}
          >            
            Back
          </button>
  </>
  );
};