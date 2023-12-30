"use client";

import React, { PropsWithChildren, ReactElement, useState } from "react";
import * as styles from "./button.css";

const Button = ({
  children,
  pos,
  onClick = () => {},
}: PropsWithChildren<{ pos: "left" | "right"; onClick?: () => void }>) => {
  let [highlight, setHighlight] = useState<ReactElement<HTMLDivElement>>(<></>);
  return (
    <div
      className={styles.button}
      style={{ justifyContent: pos == "left" ? "start" : "end" }}
      onClick={(e) => {
        onClick();
        setHighlight(
          <div key={Date.now().toString()} className={styles.highlight}></div>
        );
      }}
    >
      <span className={styles.content}>{children}</span>
      {highlight}
    </div>
  );
};

export default Button;
