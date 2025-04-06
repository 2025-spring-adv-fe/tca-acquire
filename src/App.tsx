import "./App.css";
import {
  HashRouter
  , Routes
  , Route
} from 'react-router';
import { Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import { useState } from "react";
import { GameResult, getLeaderboard } from "./GameResults";
import React from "react";


const dummyGameResults: GameResult[] = [
  {
      winner: "Hermione"
      , players: [
          "Hermione"
          , "Harry"
          , "Ron"
      ]
    
  }
  , {
      winner: "Ron"
      , players: [
          "Hermione"
          , "Ron"
      ]
  }
  , {
      winner: "Larry"
      , players: [
          "Larry"
          , "Curly"
          , "Moe"
      ]
  }
  , {
      winner: "Harry"
      , players: [
          "Curly"
          , "Harry"
      ]
  }
  , {
      winner: "Ron"
      , players: [
          "Ron"
          , "Voldemort"
      ]
  }
  , {
      winner: "Voldemort"
      , players: [
          "Ron"
          , "Voldemort"
      ]
  }
];

const App = () => {

//
// Hooks...
//
const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);
//const [gameResults, setGameResults] = useState<GameResult[]>([]);

//
// Other (not hooks)...
//
const addNewGameResult = (newGameResult: GameResult) => setGameResults(
  [
    ...gameResults
    , newGameResult
  ]
);


  return (
    <div
      className='p-0'
    >
      <div className="navbar bg-base-300 shadow-lg">
        <h1 className="text-xl font-bold">
          Acquire
        </h1>
      </div>
      <div className="p-4">
      <HashRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <Home 
                totalGameCount={gameResults.length}
                leaderboardData={
                  getLeaderboard(gameResults)
                }
              />
            }
          />

          <Route 
            path='/setup'
            element={
              <Setup 
              totalGameCount={gameResults.length}
              />
            }
          />

          <Route 
            path='/play'
            element={
              <Play 
              totalGameCount={gameResults.length}
              addNewGameResult={addNewGameResult}
              />
            }
          />    
        </Routes>
      </HashRouter>
      </div>
    </div>
  );
};

export default App;