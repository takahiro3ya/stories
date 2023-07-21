/** @jsxImportSource @emotion/react */
import { ChangeEvent, Fragment, ReactNode, useState, FC } from "react";

import { css } from "@emotion/react";

import { StoryTag } from "@/auxiliary-components/StoryTag";
import { COLORS } from "@/constants/colors";
import { str3List } from "@/constants/values";

type Contents = {
  [key in (typeof str3List)[number]]: ReactNode;
};

const tabItems = str3List.map((str) => ({
  label: str,
  value: str,
}));

const contents: Contents = {
  foo: <div>AAA</div>,
  bar: <div>BBB</div>,
  baz: <div>CCC</div>,
};

export const VariousTabs = () => (
  <>
    <StoryTag tagName="like GitHub tab">
      <Tab variant="gitHub" />
    </StoryTag>
    <StoryTag tagName="like Can I use tab">
      <Tab variant="canIUse" />
    </StoryTag>
  </>
);

type PropsTab = {
  variant: "gitHub" | "canIUse";
};

const Tab: FC<PropsTab> = ({ variant }) => {
  const [selectedVal, setSelectedVal] = useState(tabItems[0].value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSelectedVal(e.target.value as (typeof str3List)[number]);

  const active = (tabVal: string) => selectedVal === tabVal;

  return (
    <div>
      <div css={styles.labels}>
        {tabItems.map((tab) => (
          <Fragment key={tab.label}>
            <input
              id={`${variant}-${tab.label}-id`} // 親コンポーネントで <Tab /> を複数個呼び出すので、id を variant で一意に設定しないと、id の重複により state の更新がうまくいかない。
              name={variant}
              type="radio"
              value={tab.value}
              onChange={handleChange}
              checked={active(tab.value)}
            />
            <label
              css={[styles[`${variant}Label`], active(tab.value) && styles[`${variant}Active`]]}
              htmlFor={`${variant}-${tab.label}-id`}
            >
              {tab.label}
            </label>
          </Fragment>
        ))}
      </div>

      <div css={styles[`${variant}Content`]}>{contents[selectedVal]}</div>
    </div>
  );
};

const styles = {
  labels: css`
    display: flex;

    & input {
      display: none; // ラジオボタンを非表示
    }
  `,

  // --------------------
  // like GitHub

  gitHubLabel: css`
    min-width: 100px;
    height: 40px;
    line-height: 40px; // height と同じにして縦方向の中央寄せ
    color: ${COLORS.gray};
    text-align: center;
    border-top: 1px solid transparent; // active なタブだけ border が表示されることにより、label の高さがずれるのを抑止。
    border-bottom: 1px solid ${COLORS.grayLight};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${COLORS.blackLight};
      }
    }
  `,
  gitHubActive: css`
    color: ${COLORS.blackLight};
    border: 1px solid ${COLORS.grayLight};
    border-radius: 8px 8px 0 0;
    border-bottom: transparent;
  `,
  gitHubContent: css`
    padding: 16px;
  `,

  // --------------------
  // like Can I use

  canIUseLabel: css`
    position: relative;
    margin-left: 12px;
    padding-left: 16px;
    background-color: #e5d8bc;
    min-width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: 300;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 40px; // height と同じにして縦方向の中央寄せ
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      right: -14px;
      /* 三角形の作成
        参考
        https://1-notes.com/css-shape-trapezoid-design/ */
      border-top: 40px solid transparent;
      border-left: 14px solid #e5d8bc;
      /* clip-path を使っても同じようなことができる。ただし、タブ幅が変動すると同じ幅で要素の右上を変形するのが難しい模様。 */
      /* clip-path: polygon(0% 100%, 0% 0%, 80% 0%, 100% 100%); */
    }

    @media (hover: hover) {
      &:hover {
        background-color: #e0c89b;

        &::after {
          border-left: 14px solid #e0c89b;
          z-index: 3;
        }
      }
    }

    &:first-of-type {
      margin-left: 16px;
    }
  `,
  canIUseActive: css`
    background-color: #e0c89b;

    &::after {
      border-left: 14px solid #e0c89b;
      z-index: 3;
    }
  `,
  canIUseContent: css`
    background-color: #e0c89b;
    padding: 16px;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  `,
};
