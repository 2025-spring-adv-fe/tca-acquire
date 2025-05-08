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

  const [largestChain, setLargestChain] = useState<string | null>(null);
  const hotelChains = [
    "Tower"
    , "American"
    , "Continental"
    , "Imperial"
    , "Festival"
    , "Wordwide"
    , "Luxor"
  ];

  return(
  <>
  {/* Turn Number Button */}
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

  {/* Winn Hotel Chain Buttons */}
  <div className="mb-4">
        <p className="font-medium">Select Largest Hotel Chain:</p>
        <div className="flex gap-2 mt-2">
          {hotelChains.map((chain) => (
            <button
              className={`btn ${
                largestChain === chain ? "btn-primary" : "btn-outline"}`}
              onClick={() => setLargestChain(chain)}
            >
              {chain}
            </button>
          ))}
        </div>
      </div>

  {/* Winn Player Buttons */}
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
                  , largestChain: largestChain!
                  , 
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

  {/* Back Button */}
  <button
            className="btn btn-soft mb-4 mt-4"
            onClick={() => nav(-1)}
          >            
            Back
          </button>
  </>
  );
};