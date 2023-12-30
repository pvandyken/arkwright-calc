import { style } from "@vanilla-extract/css";

const infobox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
});

export const infocontent = style({
  transform: "rotate(-90deg)",
});

export const playerNameBox = style([
  infobox,
  {
    borderRadius: "4px 0 0 4px",
  },
]);

export const tie = style([
  infobox,
  {
    borderRadius: "0 4px 4px 0",
  },
]);

export const playerName = style([
  infocontent,
  {
    fontWeight: "bold",
  },
]);

export const row = style({
  // marginTop: "0.5em",
  borderRadius: 4,
});

export const output = style([
  {
    fontSize: "2.5em",
  },
]);
