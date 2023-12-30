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
    <Grid container xs={12} className={styles.container}>
      <Grid xs={12}>Demand</Grid>
      <Grid
        container
        xs={12}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          xs={10}
          style={{
            paddingRight: "1em",
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
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={styles.result}
          xs={2}
        >
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Demand;
