const code = `
/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, forwardRef } from "react";

import { css, SerializedStyles } from "@emotion/react";

import { PRIORITY_CSS } from "@/constants/colors";
import { Priority, Size } from "@/types/commons";

type Props = {
  children: React.ReactNode;
  priority?: Priority;
  size?: Size;
  type?: "button" | "submit";
} & ButtonHTMLAttributes<HTMLButtonElement>;

// 参照
// https://github.com/alan2207/bulletproof-react/blob/master/src/components/Elements/Button/Button.tsx
export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, priority, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        css={[
          styles.button,
          priority && styles.base,
          priority && styles[priority],
          priority && size && styles[size],
        ]}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const styles = {
  button: css\`
    background-color: transparent;
    border: none;
    padding: 0;
    appearance: none;
  \`,
  base: css\`
    padding: 0 8px;
    min-width: 100px;
    min-height: 40px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 50px;
  \`,
  sm: css\`
    min-width: 80px;
    min-height: 32px;
    font-size: 12px;
  \`,
  md: css\`\`,
  lg: css\`
    min-width: 120px;
    min-height: 48px;
    font-size: 18px;
  \`,
  ...PRIORITY_CSS,
} as { [k in "button" | "base" | Priority | Size]: SerializedStyles };
`;
export default code;
