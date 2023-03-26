type Base = {
  primary: string;
  secondary: string;
  tertiary?: string;
  quaternary?: string;
  background?: string;
  headline?: string;
  paragraph?: string;
};

const base = (palette: Base) => {
  const { primary, secondary, tertiary, quaternary, background, headline, paragraph } = palette;
  return {
    primary,
    secondary,
    tertiary: tertiary ?? secondary,
    quaternary: quaternary ?? secondary,
    // btnPrimary: btnPrimary ?? primary,
    // btnSecondary: btnSecondary ?? secondary,
    background: background ?? "#fff",
    headline: headline ?? "#2e3438",
    paragraph: paragraph ?? "#2e3438",
  } as const;
};

// https://www.happyhues.co/palettes/14
const skyYellow: Base = {
  primary: "#ffd803",
  secondary: "#e3f6f5",
  tertiary: "#bae8e8",
  background: "#fffffe",
  headline: "#272343",
  paragraph: "#2d334a",
};

// https://colorhunt.co/palette/4c3a51774360b25068e7ab79
const warm: Base = {
  primary: "#4C3A51",
  secondary: "#774360",
  tertiary: "#B25068",
  quaternary: "#E7AB79",
};

// https://colorhunt.co/palette/b9f3fcaee2ff93c6e7fedeff
const sky: Base = {
  primary: "#B9F3FC",
  secondary: "#AEE2FF",
  tertiary: "#93C6E7",
  quaternary: "#FEDEFF",
};

export const COLORS = base(skyYellow);
