/** @jsxImportSource @emotion/react */
import { MouseEvent, FC } from "react";

import { css } from "@emotion/react";

import { Fade } from "../animations/fade/Fade";

import { useMountTransition } from "@/hooks/useMountTransition";

type Props = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * If no set, width: 100%;
   */
  maxWidth?: "240px" | "360px" | "480px" | "600px";
};

export const Modal: FC<Props> = ({ children, open, setOpen, maxWidth }) => {
  const { hasTransitionedIn } = useMountTransition(open);

  const handleClose = () => {
    setOpen(false);
  };

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {(open || hasTransitionedIn) && (
        <Fade open={open}>
          <div css={styles.overlay} onClick={handleClose}>
            <div css={styles.modal(maxWidth)} onClick={handleContentClick}>
              {children}
              <div>
                <button onClick={handleClose}>閉じる</button>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

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
    z-index: 10000;
  `,
  modal: (maxWidth?: string) => css`
    margin: 0 16px;
    padding: 16px;
    width: 100%;
    max-width: ${maxWidth};
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,
};
