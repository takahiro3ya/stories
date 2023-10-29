/** @jsxImportSource @emotion/react */
import { FC, useEffect, useCallback } from "react";

import { css } from "@emotion/react";

import { COLORS } from "@/constants/colors";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import tooltipSvg from "@/stories/assets/tooltip.svg";
import { Button } from "@/stories/buttons/button/Button";

type Props = {
  balloonId: string;
  title: string;
  body: string;
} & StyleProps;

type StyleProps = {
  width?: number;
  positions?: { right?: number; left?: number };
};

export const Tooltip: FC<Props> = ({
  balloonId,
  title,
  body,
  width = 300,
  positions = { left: 0 },
}) => {
  const { isLgDown } = useMediaQuery();

  const clickHandler = useCallback(
    (e: MouseEvent) => {
      // クリックした場所が balloon の外側の場合は非表示にする
      // closest(): 自身の要素から始めて祖先に向けて照合する（引数のセレクターが見つからない場合、null を返す）
      if ((e.target as HTMLElement).closest(`#${balloonId}`) === null) {
        const balloon = document.getElementById(balloonId);
        balloon?.style.setProperty("display", "none");
      }
    },
    [balloonId]
  );

  useEffect(() => {
    // SP サイズのみ click イベントを追加（PC サイズは hover で対応）
    if (isLgDown) {
      document.addEventListener("click", clickHandler);
    }

    return () => {
      const balloon = document.getElementById(balloonId);
      balloon?.style.setProperty("display", "none");
      document.removeEventListener("click", clickHandler);
    };
  }, [isLgDown, clickHandler, balloonId]);

  // --------------------
  // for SP - クリック（タップ）で表示・非表示を切り替える

  const handleToggle = (e: React.MouseEvent) => {
    // addEventListener のイベントをキャンセル
    e.stopPropagation();

    if (isLgDown) {
      const balloon = document.getElementById(balloonId);

      if (balloon?.style.display === "none") {
        balloon?.style.setProperty("display", "block");
      } else {
        balloon?.style.setProperty("display", "none");
      }
    }
  };
  // --------------------
  // for PC - hover で表示・非表示を切り替える

  const handleOn = () => {
    if (!isLgDown) {
      const balloon = document.getElementById(balloonId);
      balloon?.style.setProperty("display", "block");
    }
  };

  const handleOff = () => {
    if (!isLgDown) {
      const balloon = document.getElementById(balloonId);
      balloon?.style.setProperty("display", "none");
    }
  };
  // --------------------

  return (
    <div css={styles.container({ width, positions })}>
      <Button
        css={styles.icon}
        onClick={handleToggle}
        onMouseEnter={handleOn}
        onMouseLeave={handleOff}
      >
        <img src={tooltipSvg} alt="tooltip" />
      </Button>

      {/* 画面サイズが PC・SP で切り替わっても問題がないよう、css ではなく style 属性で一括管理する */}
      {/* ※ hover のみ css で管理すると、style 属性での変更が優位になるため、画面サイズが SP から PC に切り替わったときに挙動がうまくいかない */}
      <div id={balloonId} className="balloon" style={{ display: "none" }}>
        <p css={styles.title}>{title}</p>
        <p css={styles.body}>{body}</p>
      </div>
    </div>
  );
};

const styles = {
  container: ({ width, positions }: StyleProps) => css`
    position: relative;
    display: inline-block;

    .balloon {
      position: absolute;
      box-sizing: border-box;
      top: calc(100% + 10px); // 10px は▲の高さ
      left: ${typeof positions?.left === "number" ? positions.left + "px" : undefined};
      right: ${typeof positions?.right === "number" ? positions.right + "px" : undefined};
      padding: 16px;
      width: ${width}px;
      background-color: ${COLORS.blueLight};
      font-size: 14px;
      border-radius: 8px;
      /* filter: drop-shadow の safari の対策 */
      /* https://zenn.dev/kibe/articles/659dadd1d6426c */
      transform: translateZ(0);
      filter: drop-shadow(0 3px 6px #00000033); // 不透明度 20%
      white-space: pre-wrap;
      z-index: 100;
    }

    /* balloon の▲部分 */
    & .balloon::before {
      position: absolute;
      content: "";
      top: -10px; // 0 の場合親要素の上端に接するので、▲ の高さ分だけ上にずらす
      /* ❗️❗️ left, right ともに、-positions.left or right によって、▲の位置が balloon の位置によってずれないよう相殺する。
        それだけだと▲の左端と icon の左端が一致した状態なので、▲が icon の中央を指すよう調整したい。
        icon の中央は 32px / 2 = 16px、▲の指す位置は 16px / 2 = 8px。
        よって 8px を加えて icon の中央位置を指すよう調整する。 */
      left: ${typeof positions?.left === "number" ? -positions.left + 8 + "px" : undefined};
      right: ${typeof positions?.right === "number" ? -positions.right + 8 + "px" : undefined};
      border-style: solid;
      border-width: 0 8px 10px 8px; // ▲を 高さ 10px、幅 16px に設定
      border-color: transparent transparent ${COLORS.blueLight} transparent;
    }
  `,

  icon: css`
    width: 32px;

    img {
      width: 100%;
      /* vertical-align が効かないので display: block; で対応（親の button が inline-block だから？） */
      /* display: block; */ // ❗️❗️ 不要になりました。
    }
  `,
  title: css`
    margin: 0;
    font-weight: bold;
  `,
  body: css`
    margin-top: 8px;
  `,
};
