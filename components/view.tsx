"use client"
import React, { useState } from "react";
import * as styles from './view.css'
import { GoodType, newGood } from "@/lib/good";
import Good from "./good";
import { Tab, Tabs } from "@mui/material";
// @ts-ignore
import {useCookies} from 'react-cookie'

const GoodsConfig: [string, number, string][] = [
  ["Bread", 20, "#221900"],
  ["Clothing", 19, "#202020"],
  ["Cutlery", 18, "rgb(36, 9, 34)"],
  ["Lamps", 17, "rgb(3, 15, 30)"],
];
const View = () => {
  const [cookies, setCookie] = useCookies(["arkwright"])
  const [goods, setGoods] = useState<GoodType[]>(
    cookies.arkwright ?? GoodsConfig.map((args) => newGood(...args))
  );
  const [active, setActive] = useState(0);
  const updateGoods = (goods: GoodType[]) => {
    setCookie('arkwright', goods)
    setGoods(goods)
  }
  const updateActiveGood = (newGood: GoodType) => {
    updateGoods(goods.map((good, i) => (i === active ? newGood : good)));
  };
  return (
      <main
        className={styles.viewport}
        style={{ backgroundColor: goods[active].color }}
      >
        <Good good={goods[active]} onUpdate={updateActiveGood} />
        <Tabs
          value={active}
          onChange={(e, val) => setActive(val)}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          {goods.map((good) => (
            <Tab key={good.name} label={good.name} />
          ))}
        </Tabs>
      </main>
  )
}

export default View;