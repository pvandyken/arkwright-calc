import React, { useState } from "react";
import { AppealPlayer, calculateSales, newGood, GoodType } from "@/lib/good";
import Player from "./player";
import Demand from "./demand";
import * as styles from "./good.css";
import Grid from "./grid";

const Good = ({
  good,
  onUpdate,
}: {
  good: GoodType;
  onUpdate: (good: GoodType) => void;
}) => {
  const sales = calculateSales(good);
  const updatePlayers = [...Array(good.players.length).keys()].map(
    (index) => (newPlayer: AppealPlayer) =>
      onUpdate({
        ...good,
        players: good.players.map((oldPlayer, i) =>
          i === index ? newPlayer : oldPlayer
        ),
      })
  );
  const setDemand = (demand: number) => {
    onUpdate({
      ...good,
      demand: demand,
    });
  };
  return (
    <Grid
      container
      spacing="0.5em"
      marginTop="1em"
      className={styles.container}
    >
      <Grid container xs={12}>
        <Grid display="flex" justifyContent="center" xsOffset={1} xs={4}>
          Appeal
        </Grid>
        <Grid display="flex" justifyContent="center" xs={4}>
          Supply
        </Grid>
        <Grid display="flex" justifyContent="center" xs={3}>
          Sell/Store
        </Grid>
      </Grid>
      {good.players.map((player, i) => (
        <Player
          key={player.name}
          player={player}
          sales={sales.sales[player.name]}
          isTied={
            (sales.ties?.findIndex((pl) => pl === player.name) ?? -1) >= 0
          }
          onUpdate={updatePlayers[i]}
        />
      ))}

      <Demand max={good.maxDemand} value={good.demand} onUpdate={setDemand} />
    </Grid>
  );
};

export default Good;
