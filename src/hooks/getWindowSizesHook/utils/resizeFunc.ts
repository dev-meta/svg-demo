import { WindowSizesType } from "../types/WindowSizesType";

export const resizeFunc = (
  setDimensions: (value: WindowSizesType) => void
): void => {
  setDimensions({
    height: window.innerHeight || 0,
    width: window.innerWidth || 0
  });
};
