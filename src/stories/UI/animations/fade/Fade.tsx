/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { css } from "@emotion/react";

import { useMountTransition } from "@/hooks/useMountTransition";

const styles = {
  fadeOut: (transitionMs: number) => css`
    opacity: 0;
    transition: opacity ${transitionMs}ms linear;
  `,
  fadeIn: (transitionMs: number) => css`
    opacity: 1;
    transition: opacity ${transitionMs}ms linear;
  `,
};

type Props = {
  children: React.ReactNode;
  open: boolean;
  transitionMs: number;
};

export const Fade: FC<Props> = ({ children, open, transitionMs }) => {
  const { hasTransitionedIn } = useMountTransition(open, transitionMs);

  return (
    <div
      css={[styles.fadeOut(transitionMs), open && hasTransitionedIn && styles.fadeIn(transitionMs)]}
    >
      {children}
    </div>
  );
};
