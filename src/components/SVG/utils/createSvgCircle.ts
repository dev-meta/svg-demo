import { SVG, Circle } from "@svgdotjs/svg.js";

/**
 * Create and return SVG circle
 *
 * @param size: size in pixels
 * @param x: position in X coordinate
 * @param y: position in Y coordinate
 * @param fill: fill color
 * @returns new SVG circle
 */
export const createSvgCircle = (
  size: number,
  fill: string,
  x: number,
  y: number
): Circle =>
  SVG()
    .circle()
    .size(size)
    .fill(fill)
    .move(x, y);
