import { Box, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import * as styles from "./help.css";
import Grid from "./grid";

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <IconButton size="small" onClick={() => setShowHelp(true)}>
        <HelpIcon />
      </IconButton>
      <Modal open={showHelp} onClose={() => setShowHelp(false)}>
        <Box className={styles.modal}>
          <Grid display="flex" justifyContent="center" alignContent="center">
            <div>
              <p>
                Appeal calculator for{" "}
                <a href="https://boardgamegeek.com/boardgame/154825/arkwright">
                  Arkwright
                </a>.
              </p>
              <p>
                Calculate the number of sales allocated to each player based on
                their current <i>appeal</i> and <i>supply</i>, and the{" "}
                <i>demand</i> of the good.
              </p>
              <p>
                If <i>supply</i> is not set (e.g. left as "<b>-</b>"), it will
                default as equal to player's <i>appeal</i>.
              </p>
              <p>
                If multiple players tie for sale allocation, all tied players
                will be awarded the sale. The calculator does not take{" "}
                <i>quality</i> into account; players with higher good{" "}
                <i>quality</i> should always win ties.
              </p>
            </div>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Help;
