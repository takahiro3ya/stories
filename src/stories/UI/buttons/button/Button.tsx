/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, forwardRef } from "react";

import { css, SerializedStyles } from "@emotion/react";

import { PRIORITY_CSS } from "@/constants/colors";
import { Priority, Size } from "@/types/commons";

type Props = {
  children: React.ReactNode;
  priority?: Priority;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
  const { children, priority, size = "md" } = props;
  return (
    <button ref={ref} css={[styles.button, priority && styles[priority], styles[size]]} {...props}>
      {children}
    </button>
  );
});

const styles = {
  button: css`
    background-color: transparent;
    border: none;
    padding: 0;
    appearance: none;
  `,
  ...PRIORITY_CSS,
} as { [k in "button" | Priority | Size]: SerializedStyles };
