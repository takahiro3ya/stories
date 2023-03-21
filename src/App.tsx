import { useState } from "react";

import { Global, css } from "@emotion/react";

import { Modal } from "./stories/UI/modal/Modal";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Global styles={globalStyles} />

      <button onClick={() => setOpen(true)}>モーダルを開く</button>
      <Modal open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Modal>
    </>
  );
}

export const globalStyles = css`
  body {
    color: #2e3438;
    font-size: 16px;
    /* 2022年に最適なfont-familyの書き方 */
    /* https://ics.media/entry/200317/ */
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo,
      sans-serif;
    /* sample for JP font */
    /* font-family: YuMincho, YuGothic, sans-serif; */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
  }
`;

export default App;
