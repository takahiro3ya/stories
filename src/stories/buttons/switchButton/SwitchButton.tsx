/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { BASE_COLORS, COLORS } from "@/constants/colors";

type Props = {
  input: {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
  };
  colors?: Colors;
};
type Colors = {
  main?: string;
  back?: string;
  knob?: string;
};

// 参照
// https://github.com/alan2207/bulletproof-react/blob/master/src/components/Elements/Button/Button.tsx
export const SwitchButton = ({ input, colors }: Props) => (
  <div css={styles.wrapper(colors)}>
    <input className="input" id="toggle" type="checkbox" {...input} />
    <label className="label" htmlFor="toggle" />
  </div>
);

const styles = {
  wrapper: (colors?: Colors) => css`
    position: relative;
    width: 48px;
    height: 24px;

    & .input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      opacity: 0;
      cursor: pointer;
    }

    & .label {
      width: 48px;
      height: 24px;
      background-color: ${colors?.back ?? COLORS.gray};
      position: relative;
      display: inline-block;
      border-radius: 12px;
      transition: "0.4s";
      box-sizing: border-box;

      &:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        left: 2px;
        top: 2px;
        z-index: 2;
        background-color: ${colors?.knob ?? "#fff"};
        transition: 0.3s;
      }
    }
    & input:checked + .label {
      background-color: ${colors?.main ?? BASE_COLORS.primary};
    }
    & input:checked + .label:after {
      left: 26px;
    }
  `,
};
