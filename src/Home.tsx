import { useNavigate } from "react-router";
import { GeneralFacts, LeaderboardEntry } from "./GameResults";
import { hotelNames } from "./App";
import React, { useEffect } from "react";

export const AppTitle = "Acquire Companion App"

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (t: string) => void;
    generalFacts: GeneralFacts;
    gamesByMonthData: Array<[string, number]>;
    hotelWinTally: Record<string, number>;
}

export const Home: React.FC<HomeProps> = ({
    leaderboardData,
    setTitle
    , generalFacts
    , gamesByMonthData
    , hotelWinTally
}) => {

  useEffect(
    () => setTitle(AppTitle)
    , []
  );

    // Use a react hook for button navigation

    const nav = useNavigate();

    return (
        <>
            <button
                className="btn btn active btn-secondary btn-lg mt-4"
                onClick={() => nav("/setup")}
            >
                Play Acquire
            </button>

            <div className="card w-full bg-base-100 card-md shadow-lg mt-4">
                <div className="card-body">
                    <h2 className="card-title">General</h2>
                      <div className="overflow-x-auto">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <td>Last Played</td>
                                  <th> { generalFacts.lastPlayed } </th>
                                </tr>
                                <tr>
                                  <td>Total Games</td>
                                  <th> { generalFacts.totalGames } </th>
                                </tr>
                                <tr>
                                  <td>Shortest Game</td>
                                  <th> { generalFacts.shortestGame } </th>
                                </tr>
                                <tr>
                                  <td>Longest Game</td>
                                  <th> { generalFacts.longestGame } </th>
                                </tr>
                                <tr>
                                  <td>Average Turns per Game</td>
                                  <th> { generalFacts.avgTurnsPerGame } </th>
                                </tr>
                                <tr>
                                  <td>Largest Chain Wins</td>
                                  <td>
                                    <ul className="list-none font-bold">
                                      {hotelNames.map(hotel => (
                                        <li key={hotel}>
                                          {hotel}: {hotelWinTally[hotel] ?? 0}
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
                      </div>   
                </div>
            </div>




            <div className="card w-full bg-base-100 card-md shadow-lg mt-4">
                <div className="card-body">
                    <h2 className="card-title">Leaderboard</h2>
                    {leaderboardData.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>AVERAGE</th>
                                        <th>PLAYER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaderboardData.map((x) => (
                                        <tr key={x.player}>
                                            <th>{x.wins}</th>
                                            <td>{x.losses}</td>
                                            <td>{x.average}</td>
                                            <td>{x.player}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>Play a game of Acquire to see the leaderboard.</p>
                    )}
                </div>
            </div>
            <div className="card w-full bg-base-100 card-md shadow-lg mt-4">
                <div className="card-body">
                    <h2 className="card-title">Games By Month</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>MONTH</th>
                                        <th>NUMBER OF GAMES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gamesByMonthData.map((x) => (
                                        <tr key={x[0]}>
                                            <th>{x[0]}</th>
                                            <td>{x[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </>
    );
};
