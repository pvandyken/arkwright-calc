import { style } from "@vanilla-extract/css";

export const viewport = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'background-color 0.5s'
})
