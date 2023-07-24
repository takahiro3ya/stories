/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes } from "react";

import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export const UlNone: FC<Props> = ({ children, ...props }) => {
  // 呼び出し先で指定された css={styles.●●●} は props に含まれるので、<ul> に適用される。
  return (
    <ul css={styles.ul} {...props}>
      {children}
    </ul>
  );
};

const styles = {
  ul: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
};
