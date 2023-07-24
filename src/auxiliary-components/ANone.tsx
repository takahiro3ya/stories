/** @jsxImportSource @emotion/react */
import { AnchorHTMLAttributes, FC } from "react";

import { css } from "@emotion/react";

import { BASE_COLORS } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ANone: FC<Props> = ({ children, ...props }) => {
  return (
    <a css={styles.anchor} {...props}>
      {children}
    </a>
  );
};

const styles = {
  anchor: css`
    color: ${BASE_COLORS.paragraph};
    text-decoration: none;

    &:active {
      color: ${BASE_COLORS.paragraph};
    }
    /* &:focus {
      outline: none;
    } */
  `,
};
