import { css } from "@emotion/react";

export const COLORS = {
  grayLight: "#d0d7de",
  gray: "#9da3a8",
  grayDark: "#55595d",
  blackLight: "#2e3438",
};

const defaultText = COLORS.blackLight;

const myStories: Base = {
  primary: "#31589e",
  secondary: "#c0e8dd",
  tertiary: "#e9e7cd",
  textPrimary: "white",
  textSecondary: "#898989",
  textTertiary: "#146eaa",
  textWarning: "white",
  background: "#fffffe",
  headline: "#2e2a4b",
  paragraph: "#41434f",
};

// // https://colorhunt.co/palette/4c3a51774360b25068e7ab79
// const warm: Base = {
//   primary: "#4C3A51",
//   secondary: "#774360",
//   tertiary: "#B25068",
// };

// // https://colorhunt.co/palette/b9f3fcaee2ff93c6e7fedeff
// const sky: Base = {
//   primary: "#B9F3FC",
//   secondary: "#AEE2FF",
//   tertiary: "#93C6E7",
// };

type Base = {
  primary: string;
  secondary: string;
  tertiary?: string;
  warning?: string;
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
  textWarning?: string;
  background?: string;
  headline?: string;
  paragraph?: string;
};

const base = (palette: Base) => {
  const {
    primary,
    secondary,
    tertiary,
    warning,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
    background,
    headline,
    paragraph,
  } = palette;

  return {
    primary,
    secondary,
    tertiary: tertiary ?? secondary,
    warning: warning ?? "#cf222e",
    textPrimary: textPrimary ?? paragraph ?? defaultText,
    textSecondary: textSecondary ?? paragraph ?? defaultText,
    textTertiary: textTertiary ?? paragraph ?? defaultText,
    textWarning: textWarning ?? paragraph ?? defaultText,
    background: background ?? "#fff",
    headline: headline ?? defaultText,
    paragraph: paragraph ?? defaultText,
  } as const;
};

export const BASE_COLORS = base(myStories);

export const PRIORITY_CSS = {
  primary: css`
    background-color: ${BASE_COLORS.primary};
    color: ${BASE_COLORS.textPrimary};
  `,
  secondary: css`
    background-color: ${BASE_COLORS.secondary};
    color: ${BASE_COLORS.textSecondary};
  `,
  tertiary: css`
    background-color: ${BASE_COLORS.tertiary};
    color: ${BASE_COLORS.textTertiary};
  `,
  warning: css`
    background-color: ${BASE_COLORS.warning};
    color: ${BASE_COLORS.textWarning};
  `,
};
