import { flexCenter } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";
export const display = style([
  flexCenter,
  {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
    fontSize: "3em",
    fontWeight: 'bold'
  },
]);

export const container = style({
  position: "relative",
  height: 80,
});

export const button = style({
  height: "33.33%",
});

export const touched = style({
  backgroundColor: "rgba(0, 0, 0, 0.116)"
})