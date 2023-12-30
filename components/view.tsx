"use client";
import React, { useState } from "react";
import * as styles from "./view.css";
import { GoodType, newGood } from "@/lib/good";
import Good from "./good";
import { Tab, Tabs } from "@mui/material";
// @ts-ignore
import { useCookies } from "react-cookie";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FireplaceIcon from "@mui/icons-material/Fireplace";

const GoodsConfig = [
  {
    name: "Bread",
    maxDemand: 20,
    color: "rgb(96, 53, 0)",
    icon: BreakfastDiningIcon,
  },
  {
    name: "Clothing",
    maxDemand: 19,
    color: "#202020",
    icon: CheckroomIcon,
  },
  {
    name: "Cutlery",
    maxDemand: 18,
    color: "rgb(36, 9, 34)",
    icon: RestaurantIcon,
  },
  {
    name: "Lamps",
    maxDemand: 17,
    color: "rgb(3, 15, 30)",
    icon: FireplaceIcon,
  },
];
const View = () => {
  const [cookies, setCookie] = useCookies(["arkwright"]);
  const [goods, setGoods] = useState<GoodType[]>(
    cookies.arkwright ??
      GoodsConfig.map((args) => newGood(args.name, args.maxDemand, args.color))
  );
  const icons = GoodsConfig.map((args) => args.icon);
  const [active, setActive] = useState(0);
  const updateGoods = (goods: GoodType[]) => {
    // setCookie("arkwright", goods);
    setGoods(goods);
  };
  const updateActiveGood = (newGood: GoodType) => {
    updateGoods(goods.map((good, i) => (i === active ? newGood : good)));
  };
  return (
    <main
      className={styles.viewport}
      style={{ background: goods[active].color }}
    >
      <Good good={goods[active]} onUpdate={updateActiveGood} />
      <Tabs
        value={active}
        onChange={(e, val) => setActive(val)}
        aria-label="basic tabs example"
        variant="fullWidth"
      >
        {goods.map((good, i) => {
          const Icon = icons[i];
          return <Tab icon={<Icon />} key={good.name} label={good.name} />;
        })}
      </Tabs>
    </main>
  );
};

export default View;
