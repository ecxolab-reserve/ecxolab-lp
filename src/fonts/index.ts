import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const engobe = localFont({
  src: [
    {
      path: "../fonts/engobe/engobe-thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/engobe/engobe-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-engobe-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
});
