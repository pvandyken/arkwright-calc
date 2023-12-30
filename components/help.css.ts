import { style } from "@vanilla-extract/css";

export const modal = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: "2em",
  backgroundColor: "#161616",
  boxShadow: "24",
})