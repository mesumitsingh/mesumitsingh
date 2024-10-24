import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: "#000000",
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "fill 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svgHover}
      xmlns="http://www.w3.org/2000/svg"
      width="100%" 
      height="100%"
      viewBox="0 0 156 224" 
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M10 1610 l0 -351 168 -80 c92 -45 212 -101 267 -126 144 -65 456
          -219 480 -237 18 -14 -27 -15 -447 -16 l-468 0 0 -262 0 -261 548 6 c301 4
          647 7 770 7 l222 0 0 381 0 380 -367 180 c-425 208 -433 212 -439 222 -3 4 28
          7 68 8 200 1 658 7 696 8 l42 1 0 245 0 245 -770 0 -770 0 0 -350z m300 36 l0
          -165 53 -19 c28 -11 115 -52 192 -90 77 -38 282 -138 454 -222 173 -85 334
          -164 358 -178 l43 -24 0 -254 0 -254 -80 0 -80 0 0 195 0 195 -32 13 c-18 8
          -170 82 -338 165 -168 83 -399 195 -515 249 l-210 99 -3 227 -2 227 80 0 80 0
          0 -164z m1100 69 l0 -95 -257 -1 c-142 -1 -357 -2 -478 -3 l-220 -1 -3 84 c-2
          46 -1 90 2 98 4 11 94 13 481 13 l475 0 0 -95z m-417 -1085 l107 0 0 -95 0
          -95 -475 0 -475 0 0 93 c0 52 2 96 4 98 2 2 168 3 368 2 199 -2 411 -3 471 -3z"
        />
      </g>
    </svg>
  );
};
