import { Global, css } from "@emotion/react";

import { COLORS } from "@/constants/colors";
import { maxScreen } from "@/utils/mediaQueries";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

function App() {
  return (
    <>
      <Global styles={globalStyles} />

      <h1>テストヘッドライン</h1>
      <div>div 今日の天気は晴れ。降水確率は10%。明日も晴れるといいな。週末も晴れるといいな。</div>
      <p>p 今日の天気は晴れ。降水確率は10%。明日も晴れるといいな。週末も晴れるといいな。</p>
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
    background-color: ${COLORS.background};
    color: ${COLORS.paragraph};
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
    h6 {
      margin: 0;
      color: ${COLORS.headline};
    }

    p {
      margin: 0;
      color: ${COLORS.paragraph};
    }

    button {
      cursor: pointer;
    }
  }
`;

export default App;
