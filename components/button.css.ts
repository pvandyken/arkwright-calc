import { keyframes, style } from "@vanilla-extract/css";

export const button = style({
  width: "50%",
  height: "100%",
  float: "left",
  position: "relative",
  display: 'flex',
  alignItems: 'center',
});

export const fade = keyframes({
  "0%": { opacity: 0.5 },
  "100%": { opacity: 0 },
});

export const highlight = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "white",
  pointerEvents: "none",
  opacity: 0,
  animationName: fade,
  animationDuration: "1s",
});

export const content = style({
  marginLeft: '1em',
  marginRight: '1em',
  userSelect: 'none',
  cursor: 'default'
})