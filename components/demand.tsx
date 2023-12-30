"use client";
import React from "react";
import Slider from "@mui/material/Slider/Slider";
import * as styles from "./demand.css";
import Grid from "./grid";

const Demand = ({
  value,
  max,
  onUpdate,
}: {
  value: number;
  max: number;
  onUpdate: (val: number) => void;
}) => {
  return (
    <div className={styles.container}>
      <Grid>Demand</Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid
          xs={10}
          style={{
            paddingRight: "1em"
          }}
        >
          <Slider
            step={1}
            value={value}
            min={0}
            max={max}
            onChange={(e, value) => onUpdate(value as number)}
            style={{
              verticalAlign: "middle",
            }}
          />
        </Grid>
        <Grid className={styles.result} xs={2}>
          {value}
        </Grid>
      </Grid>
    </div>
  );
};

export default Demand;
