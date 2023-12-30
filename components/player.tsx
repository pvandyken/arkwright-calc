import React from "react";
import Param from "./param";
import * as styles from "./player.css";
import { AppealPlayer, setAppeal, setSupply } from "@/lib/good";
import Grid from "./grid";

function getTextColorForBackground(bgColor: string) {
  // Convert hex color to RGB
  let hexColor = bgColor.replace(/^#/, "");
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate relative luminance
  let luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Use a luminance threshold to decide text color
  if (luminance > 128) {
    return "#0c0c0c"; // Use black text for light backgrounds
  } else {
    return "white"; // Use white text for dark backgrounds
  }
}
const Player = ({
  player,
  sales,
  isTied = false,
  onUpdate,
}: {
  player: AppealPlayer;
  sales: number;
  isTied?: boolean;
  onUpdate: (newPlayer: AppealPlayer) => void;
}) => (
  <Grid
    container
    style={{
      backgroundColor: player.color,
      color: getTextColorForBackground(player.color),
    }}
    className={styles.row}
  >
    <Grid className={styles.playerNameBox} xs={1}>
      <div className={styles.playerName}>{player.name}</div>
    </Grid>
    <Param
      value={player.appeal}
      onUpdate={(val) => onUpdate(setAppeal(player, val))}
    />
    {!player.is_importer ? (
      <>
        <Param
          value={player.supply}
          onUpdate={(val) => onUpdate(setSupply(player, val))}
          maskZero="-"
          style={{
            borderLeft: "2px solid rgba(0,0,0,0.3)",
          }}
        />
        <Grid xs={isTied ? 2 : 3} className={styles.output}>
          {sales}/{(player.supply > 0 ? player.supply : player.appeal) - sales}
        </Grid>
        {isTied ? (
          <Grid xs={0.5} xsOffset={0.5} className={styles.tie}>
            <div className={styles.infocontent}>Tied</div>
          </Grid>
        ) : null}
      </>
    ) : (
      <Grid xs={7} />
    )}
  </Grid>
);

export default Player;
