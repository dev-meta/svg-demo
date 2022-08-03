import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";

import { WindowSizesType } from "./types/WindowSizesType";
import { resizeFunc } from "./utils/resizeFunc";

/**
 * Custome React HOOK for triger handle window resize events
 *
 * @param debounceTimer - custome delay counter (default is 150MS)
 * @returns curent window size (heigth and width in pixels)
 */
export const getWindowSizesHook = (
  debounceTimer: number = 150
): WindowSizesType => {
  const [dimensions, setDimensions] = useState<WindowSizesType>({
    height: window?.innerHeight || 0,
    width: window?.innerWidth || 0
  });

  const handleResize = useCallback(() => {
    resizeFunc(setDimensions);
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, debounceTimer);

    window.addEventListener("resize", debouncedHandleResize);

    return (): void => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return dimensions;
};
