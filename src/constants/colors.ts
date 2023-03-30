import { css } from "@emotion/react";

type Base = {
  primary: string;
  secondary: string;
  tertiary?: string;
  quaternary?: string;
  warning?: string;
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
  textQuaternary?: string;
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
    quaternary,
    warning,
    textPrimary,
    textSecondary,
    textTertiary,
    textQuaternary,
    textWarning,
    background,
    headline,
    paragraph,
  } = palette;
  return {
    primary,
    secondary,
    tertiary: tertiary ?? secondary,
    quaternary: quaternary ?? secondary,
    warning: warning ?? "#cf222e",
    textPrimary: textPrimary ?? paragraph ?? defaultText,
    textSecondary: textSecondary ?? paragraph ?? defaultText,
    textTertiary: textTertiary ?? paragraph ?? defaultText,
    textQuaternary: textQuaternary ?? paragraph ?? defaultText,
    textWarning: textWarning ?? paragraph ?? defaultText,
    background: background ?? "#fff",
    headline: headline ?? defaultText,
    paragraph: paragraph ?? defaultText,
  } as const;
};

// https://www.happyhues.co/palettes/14
const skyYellow: Base = {
  primary: "#ffd803",
  secondary: "#e3f6f5",
  tertiary: "#bae8e8",
  quaternary: "#dbca78", // add
  background: "#fffffe",
  headline: "#272343",
  paragraph: "#2d334a",
};

// // https://colorhunt.co/palette/4c3a51774360b25068e7ab79
// const warm: Base = {
//   primary: "#4C3A51",
//   secondary: "#774360",
//   tertiary: "#B25068",
//   quaternary: "#E7AB79",
// };

// // https://colorhunt.co/palette/b9f3fcaee2ff93c6e7fedeff
// const sky: Base = {
//   primary: "#B9F3FC",
//   secondary: "#AEE2FF",
//   tertiary: "#93C6E7",
//   quaternary: "#FEDEFF",
// };

export const COLORS = base(skyYellow);

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
    color: ${COLORS.textQuaternary};
  `,
  quaternary: css`
    background-color: ${COLORS.quaternary};
    color: ${COLORS.textQuaternary};
  `,
  warning: css`
    background-color: ${COLORS.warning};
    color: ${COLORS.textWarning};
  `,
};
