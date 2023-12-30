import { style } from "@vanilla-extract/css";

export const container = style({
  paddingLeft: "1em",
  paddingRight: "1em",
  marginTop: "1em",
})

export const colTitle = style([
  "d-flex",
  "justify-content-center",
])