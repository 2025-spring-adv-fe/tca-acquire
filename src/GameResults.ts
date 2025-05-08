import { durationFormatter } from "human-readable";

const formatGameDuration = durationFormatter<string>();
const formatLastPlayed = durationFormatter<string>({
  allowMultiples: ["y", "mo", "d"]
});

//
// Exported interfaces...
//
export interface GameResult {
  winner: string;
  players: string[];
  start: string;
  end: string;
  turnCount: number;
  largestChain?: string;
}

export interface LeaderboardEntry {
  wins: number;
  losses: number;
  average: string;
  player: string;
}

export interface GeneralFacts {
  lastPlayed: string;
  totalGames: number;
  shortestGame: string;
  longestGame: string;
  avgTurnsPerGame: string;
  largestHotelChain: [string, number][];
}

//
// Exported Functions...
//
export const getLeaderboard = (
  results: GameResult[]
): LeaderboardEntry[] =>
  getPreviousPlayers(results)
    .map((player) => getLeaderboardEntry(results, player))
    .sort((a, b) => {
      // Some wins with same average, more games makes you higher...
      if (Number(a.average) === Number(b.average) && a.wins > 0) {
        return b.wins + b.losses - (a.wins + a.losses);
      }
      // No wins, more games makes you lower...
      if (a.wins === 0 && b.wins === 0) {
        return a.wins + a.losses - (b.wins + b.losses);
      }
      // Higher average means higher...
      return Number(b.average) - Number(a.average);
    });

export const getGeneralFacts = (results: GameResult[]): GeneralFacts => {
  if (results.length === 0) {
    return {
      lastPlayed: "n/a",
      totalGames: 0,
      shortestGame: "n/a",
      longestGame: "n/a",
      avgTurnsPerGame: "0",
      largestHotelChain: []
    };
  }

  // lastPlayed calculation
  const now = Date.now();
  const lastPlayedMs = Math.min(
    ...results.map((g) => now - Date.parse(g.end))
  );

  // game durations
  const durationsMs = results.map(
    (g) => Date.parse(g.end) - Date.parse(g.start)
  );

  // average turns
  const totalTurns = results.reduce((sum, g) => sum + g.turnCount, 0);

  // tally largest-chain counts
  const counts: Record<string, number> = results.reduce<Record<string, number>>((acc, g) => {
    if (g.largestChain) {
      acc[g.largestChain] = (acc[g.largestChain] || 0) + 1;
    }
    return acc;
  }, {});

  // convert to sorted tuple array
  const largestHotelChain: [string, number][] = Object.entries(counts).sort(
    ([, aCount], [, bCount]) => bCount - aCount
  );

  return {
    lastPlayed: `${formatLastPlayed(lastPlayedMs)} ago`,
    totalGames: results.length,
    shortestGame: formatGameDuration(Math.min(...durationsMs)),
    longestGame: formatGameDuration(Math.max(...durationsMs)),
    avgTurnsPerGame: (totalTurns / results.length).toFixed(2),
    largestHotelChain
  };
};

export const getPreviousPlayers = (
  results: GameResult[]
): string[] => {
  const allPlayers = results.flatMap((g) => g.players);
  return Array.from(new Set(allPlayers)).sort((a, b) => a.localeCompare(b));
};

export const getGamesByMonth = (
  results: GameResult[]
): Array<[string, number]> => {
  const months = results.map((g) =>
    new Date(g.start).toLocaleString('default', { month: 'short' })
  );

  const grouped = months.reduce<Record<string, number>>((acc, m) => {
    acc[m] = (acc[m] || 0) + 1;
    return acc;
  }, {});

  return [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'
  ].map((month) => [month, grouped[month] || 0]);
};

// Helper Functions...
const getLeaderboardEntry = (
  results: GameResult[],
  player: string
): LeaderboardEntry => {
  const gamesForPlayer = results.filter((g) =>
    g.players.includes(player)
  ).length;
  const wins = results.filter((g) => g.winner === player).length;
  const avg = gamesForPlayer > 0 ? wins / gamesForPlayer : 0;

  return {
    wins,
    losses: gamesForPlayer - wins,
    average: avg.toFixed(3),
    player
  };
};
