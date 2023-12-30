import React from "react";
import * as styles from "./param.css";
import Button from "./button";
import Grid from "./grid";

const Param = ({
  value,
  onUpdate,
  maskZero,
  style = {},
}: {
  value: number;
  onUpdate: (newValue: number) => void;
  maskZero?: string;
  style?: React.CSSProperties;
}) => (
  <Grid className={styles.container} style={style} xs={4}>
    <Button pos="left" onClick={() => value > 0 && onUpdate(value - 1)}>
      -
    </Button>
    <Button pos="right" onClick={() => onUpdate(value + 1)}>
      +
    </Button>
    <div className={styles.display}>
      {typeof maskZero !== "undefined" && value == 0 ? maskZero : value}
    </div>
  </Grid>
);

export default Param;
