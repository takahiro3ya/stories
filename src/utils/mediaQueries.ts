/**
 * より詳細な設定をする場合
 * https://hirakublog.com/emotion-mediaqueries-function/
 */

/**
 * 値は tailwindcss を参考
 * @see {@link https://tailwindcss.com/docs/screens tailwindcss}
 */
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
} as const;

type BreakpointKeys = keyof typeof breakpoints;
type ArgBreakpoint = BreakpointKeys | number; // 引数の型

/**
 * ユーザー定義型ガード
 * "sm" | "md" | "lg" | "xl" | "xxl" のようなユニオン型かを判定
 *
 * Typescript "is" and "in"
 * https://qiita.com/ryo2132/items/ce9e13899e45dcfaff9b
 *
 * Typescript 型ガード
 * https://zenn.dev/oreo2990/articles/5f75eaa285f2f9
 */
const isBreakPointKeys = (value: ArgBreakpoint): value is BreakpointKeys => {
  return value in breakpoints;
};

export const minScreen = (breakpoint: ArgBreakpoint) => {
  const mediaQuery = isBreakPointKeys(breakpoint)
    ? `@media (min-width: ${breakpoints[breakpoint]})`
    : `@media (min-width: ${breakpoint}px)`;
  return mediaQuery;
};
