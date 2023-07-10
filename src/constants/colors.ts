import { css } from "@emotion/react";

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

const defaultText = "#2e3438";

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

const myStories: Base = {
  primary: "#31589e",
  secondary: "#c0e8dd",
  tertiary: "#e9e7cd",
  textPrimary: "white",
  textSecondary: "#898989",
  textTertiary: "#146eaa",
  textWarning: "white",
  background: "#fffffe",
  headline: "#272343",
  paragraph: "#2d334a",
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

export const COLORS = base(myStories);

export const PRIORITY_CSS = {
  primary: css`
    background-color: ${COLORS.primary};
    color: ${COLORS.textPrimary};
  `,
  secondary: css`
    background-color: ${COLORS.secondary};
    color: ${COLORS.textSecondary};
  `,
  tertiary: css`
    background-color: ${COLORS.tertiary};
    color: ${COLORS.textTertiary};
  `,
  warning: css`
    background-color: ${COLORS.warning};
    color: ${COLORS.textWarning};
  `,
};
