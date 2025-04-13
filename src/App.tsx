import "./App.css";
import {
  HashRouter
  , Routes
  , Route
} from 'react-router';
import { AppTitle, Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import { useState } from "react";
import { GameResult, getGeneralFacts, getLeaderboard, getPreviousPlayers } from "./GameResults";


const dummyGameResults: GameResult[] = [
  {
      winner: "Hermione"
      , players: [
          "Hermione"
          , "Harry"
          , "Ron"
      ]
          , start: "2025-04-01T19:20:49.248Z"
          , end: "2025-04-01T19:40:49.248Z"

      
  }
  , {
      winner: "Ron"
      , players: [
          "Hermione"
          , "Ron"
      ]
      , start: "2025-04-01T19:20:49.248Z"
      , end: "2025-04-01T19:50:49.248Z"
  }
];

const App = () => {

//
// Hooks...
//
//const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);
const [gameResults, setGameResults] = useState<GameResult[]>([]);


const [title, setTitle] = useState(AppTitle);
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
          { title}
        </h1>
      </div>
      <div className="p-4">
      <HashRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <Home 
                leaderboardData={
                  getLeaderboard(gameResults)
                }
                setTitle={setTitle}
                generalFacts={
                  getGeneralFacts(gameResults)
                }
              />
            }
          />

          <Route 
            path='/setup'
            element={
              <Setup 
                setTitle ={setTitle}
                previousPlayers={getPreviousPlayers(gameResults)}
              />
            }
          />

          <Route 
            path='/play'
            element={
              <Play
              addNewGameResult={addNewGameResult}
              setTitle ={setTitle}
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