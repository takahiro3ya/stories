import { Global, css } from "@emotion/react";

import { SwitchButton } from "./stories/buttons/switchButton/SwitchButton";

import { BASE_COLORS } from "@/constants/colors";
import { maxScreen } from "@/utils/mediaQueries";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

function App() {
  return (
    <>
      <Global styles={globalStyles} />

      <SwitchButton input={{ onChange: () => console.log("onChange!") }} />
    </>
  );
}

export const globalStyles = css`
  :root {
    font-size: 16px;
    /* 必要に応じてレスポンシブでサイズを調整 */
    /* ${maxScreen("md")} {
      font-size: 14px;
    } */
  }

  body {
    margin: 0;
    background-color: ${BASE_COLORS.background};
    color: ${BASE_COLORS.paragraph};
    /* 2022年に最適なfont-familyの書き方 */
    /* https://ics.media/entry/200317/ */
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo,
      sans-serif;
    /* sample for JP font */
    /* font-family: YuMincho, YuGothic, sans-serif; */
    /* white-space: pre-wrap; // ❗️❗️ body に pre-wrap をあてると storybook のトップに余計な space が発生する。 */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      color: ${BASE_COLORS.headline};
      white-space: pre-wrap;
    }

    p {
      margin: 0;
      color: ${BASE_COLORS.paragraph};
    }

    p,
    span,
    li {
      white-space: pre-wrap;
    }

    button {
      cursor: pointer;
    }
  }
`;

export default App;
