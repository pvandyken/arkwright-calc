"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
// @ts-ignore
import { CookiesProvider } from "react-cookie";
import dynamic from "next/dynamic";

const View = dynamic(() => import('@/components/view'), { ssr: false })

export default function Home() {
  return (
    <CookiesProvider
      defaultSetOptions={{ path: "/", maxAge: 2592000, sameSite: "strict" }}
    >
      <ThemeProvider theme={theme}>
        <View />
      </ThemeProvider>
    </CookiesProvider>
  );
}
