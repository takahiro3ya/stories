export const TRANSITION_MS = 150;

export const str3List = ["foo", "bar", "baz"] as const;
export const str5List5 = ["foo", "bar", "baz", "qux", "quux"];

/**
 * 値は tailwindcss を参考。
 * @see {@link https://tailwindcss.com/docs/screens tailwindcss}
 */
export const bpNumItem = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const;

export const breakpoints = {
  sm: `${bpNumItem.sm}px`,
  md: `${bpNumItem.md}px`,
  lg: `${bpNumItem.lg}px`,
  xl: `${bpNumItem.xl}px`,
  xxl: `${bpNumItem.xxl}px`,
} as const;
