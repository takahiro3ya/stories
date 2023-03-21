/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { css, SerializedStyles } from "@emotion/react";

type Priority = "primary" | "secondary" | "warning" | "info";
type Size = "sm" | "md" | "lg";
type Props = {
  label: string;
  priority?: Priority;
  size?: Size;
};

export const Button: FC<Props> = ({ label, priority = "primary", size = "md" }) => {
  return <button css={[styles.button, styles[priority], styles[size]]}>{label}</button>;
};

const styles = {
  button: css`
    /* backgroundColor: 'transparent', */
    /* border: 'none',
      cursor: 'pointer',
      padding: 0,
      appearance: 'none', */
    /* background-color: transparent; */
  `,
  primary: css`
    background-color: "transparent";
  `,
} as { [k in "button" | Priority | Size]: SerializedStyles };
