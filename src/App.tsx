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
    winner: "Hermione",
    players: ["Hermione", "Harry", "Ron"],
    start: "2025-04-01T19:20:49.248Z",
    end: "2025-04-01T19:40:49.248Z"
  },
  {
    winner: "Ron",
    players: ["Hermione", "Ron"],
    start: "2025-04-01T19:20:49.248Z",
    end: "2025-04-01T19:50:49.248Z"
  },
  {
    winner: "Harry",
    players: ["Harry", "Ron"],
    start: "2025-04-02T15:00:00.000Z",
    end: "2025-04-02T15:30:00.000Z"
  },
  {
    winner: "Hermione",
    players: ["Hermione", "Harry"],
    start: "2025-04-03T16:00:00.000Z",
    end: "2025-04-03T16:20:00.000Z"
  },
  {
    winner: "Ron",
    players: ["Ron", "Harry", "Hermione"],
    start: "2025-04-04T10:15:00.000Z",
    end: "2025-04-04T10:45:00.000Z"
  },
  {
    winner: "Harry",
    players: ["Harry", "Ron"],
    start: "2025-04-05T12:00:00.000Z",
    end: "2025-04-05T12:25:00.000Z"
  },
  {
    winner: "Hermione",
    players: ["Hermione", "Ron"],
    start: "2025-04-06T18:30:00.000Z",
    end: "2025-04-06T18:50:00.000Z"
  },
  {
    winner: "Ron",
    players: ["Ron", "Hermione"],
    start: "2025-04-07T14:00:00.000Z",
    end: "2025-04-07T14:35:00.000Z"
  },
  {
    winner: "Harry",
    players: ["Harry", "Hermione"],
    start: "2025-04-08T11:10:00.000Z",
    end: "2025-04-08T11:40:00.000Z"
  }
];

const App = () => {

//
// Hooks...
//
const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);
//const [gameResults, setGameResults] = useState<GameResult[]>([]);


const [title, setTitle] = useState(AppTitle);

const [currentPlayers, setCurrentPlayers] = useState<string[]>(["Barbie", "Ken"]);

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
                setCurrentPlayers={setCurrentPlayers}
              />
            }
          />

          <Route
            path='/play'
            element={
              <Play
              addNewGameResult={addNewGameResult}
              setTitle ={setTitle}
              currentPlayers={currentPlayers}
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