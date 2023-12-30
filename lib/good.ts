import { memoize, groupBy, range } from "lodash";
export interface AppealPlayer {
  name: string;
  supply: number;
  appeal: number;
  color: string;
  is_importer: boolean;
}
export function setAppeal(player: AppealPlayer, appeal: number): AppealPlayer {
  return {
    ...player,
    appeal: appeal,
  };
}
export function setSupply(player: AppealPlayer, supply: number): AppealPlayer {
  return {
    ...player,
    supply: supply,
  };
}
export function defaultPlayers(): AppealPlayer[] {
  return Object.keys(playerColors).map(
    (name) =>
      ({
        name: name,
        appeal: 0,
        supply: 0,
        color: playerColors[name as keyof typeof playerColors],
        is_importer: isImporter(name as keyof typeof playerColors)
      })
  );
}

export interface GoodType {
  name: string;
  players: AppealPlayer[];
  demand: number;
  maxDemand: number;
}

const playerColors = {
  Red: "#d10000",
  Yellow: "#ffff37",
  Blue: "#260c88",
  Green: "#52f114",
  Black: "#181818",
};
const isImporter = (name: keyof typeof playerColors) => {
  if (name === "Black") {
    return true;
  }
  return false;
};

export function _calculateSales(good: GoodType): {
  sales: { [key: string]: number };
  ties?: string[];
} {
  // Set how much the total demand is to start with
  let demand_count = good.demand;

  let sales = good.players
    .map((player) => ({ [player.name]: 0 }))
    .reduce((p, c) => ({ ...p, ...c }));

  if (demand_count === 0) {
    return { sales: sales };
  }

  const groupedPlayers = groupBy(
    good.players,
    (player) => player.appeal * 100 + (player.is_importer ? 0 : 1)
  );
  const priorities = Object.keys(groupedPlayers).toSorted().toReversed();

  let ties: AppealPlayer[] = [];

  const highestAppeal = groupedPlayers[priorities[0]][0].appeal;

  for (let appeal of range(highestAppeal + 1).toReversed()) {
    for (let priority of priorities) {
      if (groupedPlayers[priority][0].appeal < appeal) {
        continue;
      }

      const group = groupedPlayers[priority].filter(
        (player) =>
          sales[player.name] <
          (player.supply
            ? Math.min(player.appeal, player.supply)
            : player.appeal)
      );

      for (let player of group) {
        sales[player.name]++;
      }
      if (demand_count < group.length) {
        ties = group;
        demand_count = 0;
      } else {
        demand_count -= group.length;
      }
      if (!demand_count) {
        break;
      }
    }
    if (!demand_count) {
      break;
    }
  }

  if (ties.filter((player) => !player.is_importer).length > 1) {
    return {
      sales: sales,
      ties: ties.map((tie) => tie.name),
    };
  }
  return { sales: sales };
}

export const calculateSales = memoize(_calculateSales, (good) =>
  [
    good.name,
    good.demand,
    ...good.players.flatMap((player) => [player.appeal, player.supply]),
  ].join("|")
);

export function newGood(
  good: string,
  maxDemand: number,
): GoodType {
  return {
    name: good,
    players: defaultPlayers(),
    demand: 0,
    maxDemand: maxDemand,
  };
}
