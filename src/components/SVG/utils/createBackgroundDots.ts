import { SVG, G } from "@svgdotjs/svg.js";

import { createSvgCircle } from "./createSvgCircle";

/**
 * Add dot's in our SVG container
 *
 * @param width: number - Window with in pixels
 * @param heigth: number - Window height in pixels
 * @param x: number - step between points in X coordinate
 * @param y: number - step between points in Y coordinate
 */
export const createBackgroundDots = (
  width: number = 0,
  heigth: number = 0,
  x: number = 0,
  y: number = 0,
  fill: string
): G => {
  const rowsCount = +Number(heigth / y).toFixed();
  const columsCount = +Number(width / x).toFixed();
  const dotsGroup = SVG()
    .group()
    .id("dots");

  /** generate circle inside our #dots SVG group */
  for (let columnNumber = 0; columnNumber <= rowsCount; columnNumber++) {
    for (let rowNumber = 0; rowNumber <= columsCount; rowNumber++) {
      dotsGroup.add(createSvgCircle(2, fill, rowNumber * x, columnNumber * y));
    }
  }

  return dotsGroup;
};
