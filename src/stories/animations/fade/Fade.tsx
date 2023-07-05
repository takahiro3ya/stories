/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { css } from "@emotion/react";

import { TRANSITION_MS } from "@/constants/values";
import { useMountTransition } from "@/hooks/useMountTransition";

type Props = {
  children: React.ReactNode;
  open: boolean;
  transitionMs?: number;
};

export const Fade: FC<Props> = ({ children, open, transitionMs = TRANSITION_MS }) => {
  const { hasTransitionedIn } = useMountTransition(open, transitionMs);

  return (
    <div
      css={[styles.fadeOut(transitionMs), open && hasTransitionedIn && styles.fadeIn(transitionMs)]}
    >
      {children}
    </div>
  );
};

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
