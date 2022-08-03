import { SVG, Rect } from "@svgdotjs/svg.js";

/**
 * Create and return SVG rect
 *
 * @param width: width in pixels
 * @param height: height in pixels
 * @param fill: fill color
 * @param x: position in X coordinate
 * @param y: position in Y coordinate
 * @returns new SVG rect
 */
export const createSvgRect = (
  width: number,
  height: number,
  fill: string,
  x: number,
  y: number
): Rect =>
  SVG()
    .rect()
    .width(width)
    .height(height)
    .fill(fill)
    .move(x, y);
