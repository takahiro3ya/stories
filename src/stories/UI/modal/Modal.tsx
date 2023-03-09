/** @jsxImportSource @emotion/react */
import { useState, MouseEvent, FC } from "react";

import { css } from "@emotion/react";

import { Fade } from "../animations/fade/Fade";

import { useMountTransition } from "@/hooks/useMountTransition";

const transitionMs = 150;

const styles = {
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modal: css`
    margin: 0 16px;
    padding: 16px;
    width: 100%;
    max-width: var(--max-width);
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,
};

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
};

export const Modal: FC<Props> = ({ children, maxWidth = 400 }) => {
  const [open, setOpen] = useState(false);
  const { hasTransitionedIn } = useMountTransition(open, transitionMs);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button onClick={handleOpen}>モーダルを開く</button>
      {(open || hasTransitionedIn) && (
        <Fade open={open} transitionMs={transitionMs}>
          <div css={styles.overlay} onClick={handleClose}>
            <div
              css={styles.modal}
              style={{ ["--max-width" as any]: `${maxWidth}px` }}
              onClick={handleContentClick}
            >
              {children}
              <div>
                <button onClick={handleClose}>閉じる</button>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};
