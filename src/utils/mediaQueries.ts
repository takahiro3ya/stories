/**
 * 参照
 * https://hirakublog.com/emotion-mediaqueries-function/
 */
import { breakpoints } from "@/constants/values";

type BreakpointKeys = keyof typeof breakpoints;
type ArgBreakpoint = BreakpointKeys | number; // 引数の型

/**
 * ユーザー定義型ガード
 * "sm" | "md" | "lg" | "xl" | "xxl" のようなユニオン型かを判定。
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

/**
 * minScreen('md') とすると以下の文字列を返す。
 * @media (min-width: 768px)
 */
export const minScreen = (breakpoint: ArgBreakpoint) => {
  const mediaQuery = isBreakPointKeys(breakpoint)
    ? `@media (min-width: ${breakpoints[breakpoint]})`
    : `@media (min-width: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 * maxScreen('md') とすると以下の文字列を返す。
 * @media (max-width: 768px)
 */
export const maxScreen = (breakpoint: ArgBreakpoint) => {
  const mediaQuery = isBreakPointKeys(breakpoint)
    ? `@media (max-width: ${breakpoints[breakpoint]})`
    : `@media (max-width: ${breakpoint}px)`;
  return mediaQuery;
};
