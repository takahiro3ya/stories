/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { css } from "@emotion/react";

import { COLORS } from "@/constants/colors";

type Props = {
  tagName: string;
  children: React.ReactNode;
};

export const StoryTag: FC<Props> = ({ tagName, children }) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.tag}>{tagName}</span>
      {children}
    </div>
  );
};

const styles = {
  wrapper: css`
    margin-bottom: 24px;
  `,
  tag: css`
    display: inline-block;
    margin-bottom: 16px;
    padding: 0 6px;
    color: ${COLORS.gray};
    font-size: 14px;
    line-height: 1.8;
    border-top: 1px solid ${COLORS.grayLight};
    border-left: 4px solid ${COLORS.gray};
  `,
};
