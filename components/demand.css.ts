import { flexCenter } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "1em",
});

export const result = style([
  flexCenter,
  {
    fontSize: '3em'
  }
])