/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { css } from "@emotion/react";
import { PiWarning } from "react-icons/pi";

import { BASE_COLORS } from "@/constants/colors";

type Props = {
  mTop?: number;
  mBottom?: number;
  children: React.ReactNode;
};

export const WarningMsg: FC<Props> = ({ children, mTop = 0, mBottom = 40 }) => (
  <p css={styles.warning(mTop, mBottom)}>
    <PiWarning css={styles.icon} />
    {children}
  </p>
);

const styles = {
  warning: (top: number, bottom: number) => css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: ${BASE_COLORS.warning};
    font-size: 14px;
  `,
  icon: css`
    position: relative;
    top: -2px;
    margin-right: 4px;
    font-size: 18px;
  `,
};
