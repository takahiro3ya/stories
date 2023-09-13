import { Global, css } from "@emotion/react";

import { Pentagon } from "./stories/graphs/Pentagon";
import { VariousTabs } from "./stories/tabs/VariousTabs";
import { TestCom1 } from "./TestCom1";
import { TestCom2 } from "./TestCom2";

import { BASE_COLORS } from "@/constants/colors";
import { maxScreen } from "@/utils/mediaQueries";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

function App() {
  return (
    <>
      <Global styles={globalStyles} />

      {/* <h1>テストヘッドライン</h1>
      <div>div 今日の天気は晴れ。降水確率は10%。明日も晴れるといいな。週末も晴れるといいな。</div>
      <p>p 今日の天気は晴れ。降水確率は10%。明日も晴れるといいな。週末も晴れるといいな。</p> */}

      <VariousTabs />

      <TestCom1 />
      <TestCom2 />

      <Pentagon
        // fullWidth
        chartData={[
          { val: [2.8, 1.5, 3.9, 0.8, 3.4], color: "primary" },
          { val: [2.8, 4.5, 1.9, 1.8, 1.4], color: "secondary" },
        ]}
      />
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
