import { useEffect, useState } from "react";

import { bpNumItem } from "@/constants/values";

/**
 * 参照
 * https://commte.net/nextjs-emotion-media-queries
 */

type UseMediaQuery = () => {
  /**
   * 640px < innerWidth
   */
  isSmUp: boolean;
  /**
   * 768px < innerWidth
   */
  isMdUp: boolean;
  /**
   * 1024px < innerWidth
   */
  isLgUp: boolean;
  /**
   * 1280px < innerWidth
   */
  isXlUp: boolean;
  /**
   * 1536px < innerWidth
   */
  isXxlUp: boolean;

  /**
   * innerWidth <= 640px
   */
  isSmDown: boolean;
  /**
   * innerWidth <= 768px
   */
  isMdDown: boolean;
  /**
   * innerWidth <= 1024px
   */
  isLgDown: boolean;
  /**
   * innerWidth <= 1280px
   */
  isXlDown: boolean;
  /**
   * innerWidth <= 1536px
   */
  isXxlDown: boolean;
};

export const useMediaQuery: UseMediaQuery = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const updateTarget = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    updateTarget();
    window.addEventListener("resize", updateTarget);
    return () => window.removeEventListener("resize", updateTarget);
  }, []);

  return {
    isSmUp: innerWidth > bpNumItem.sm ? true : false,
    isMdUp: innerWidth > bpNumItem.md ? true : false,
    isLgUp: innerWidth > bpNumItem.lg ? true : false,
    isXlUp: innerWidth > bpNumItem.xl ? true : false,
    isXxlUp: innerWidth > bpNumItem.xxl ? true : false,

    isSmDown: innerWidth <= bpNumItem.sm ? true : false,
    isMdDown: innerWidth <= bpNumItem.md ? true : false,
    isLgDown: innerWidth <= bpNumItem.lg ? true : false,
    isXlDown: innerWidth <= bpNumItem.xl ? true : false,
    isXxlDown: innerWidth <= bpNumItem.xxl ? true : false,
  };
};
