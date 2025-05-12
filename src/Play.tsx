import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameResult } from "./GameResults";
import { hotelNames } from "./App";
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

  // State for the largest hotel...
  const [selectedHotel, setSelectedHotel] = useState("");

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

  <label htmlFor="largest-hotel" className="block mt-4 mb-2">
  Largest Hotel Chain
</label>
<select
  id="largest-hotel"
  className="select select-bordered select-accent w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-accent"
  value={selectedHotel}
  onChange={(e) => setSelectedHotel(e.target.value)}
>
  <option disabled value="">
    -- Choose a hotel --
  </option>
  {hotelNames.map((hotel) => (
    <option key={hotel} value={hotel}>
      {hotel}
    </option>
  ))}
</select>

  <div 
    className="grid grid-cols-2 gap-2 mt-4"
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
                  , largestHotel: selectedHotel
                });
                nav(-2)
              }
            }
            disabled={selectedHotel === ""}
          >
            {x} Won
          </button>
        )
      )
    }
  </div>
  <button
    className="btn btn-soft mb-4 mt-4"
    onClick={() => nav(-2)}
  >            
    Quit
  </button>
  </>
  );
};