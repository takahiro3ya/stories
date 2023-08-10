/** @jsxImportSource @emotion/react */
import { FC, Fragment } from "react";

import { css } from "@emotion/react";

import { COLORS, BASE_COLORS } from "@/constants/colors";
// import { css } from "@emotion/react";

type Props = {
  chartData: ChartData[] | null;
  size?: number;
  stroke?: string;
  fullWidth?: boolean;
};

export type ChartData = {
  val: number[]; // ex: [2.8, 1.5, 3.9, 0.8, 3.4]
  color: keyof typeof BASE_COLORS;
};

export const Pentagon: FC<Props> = ({
  chartData,
  size = 300,
  stroke = COLORS.grayLight,
  fullWidth,
}) => {
  const points = (points: [number[], number[]]) => {
    return points.map((point) => point[0].toFixed(4) + "," + point[1].toFixed(4)).join(" ");
  };

  const noSmoothing = (points: number[][]) => {
    let d = "M" + points[0][0].toFixed(4) + "," + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
      d += "L" + points[i][0].toFixed(4) + "," + points[i][1].toFixed(4);
    }
    return d + "z";
  };

  const polarToX = (angle: number, distance: number) => Math.cos(angle - Math.PI / 2) * distance;

  const polarToY = (angle: number, distance: number) => Math.sin(angle - Math.PI / 2) * distance;

  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={size} // svg の表示領域の幅（ビューポート）
      height={size} // svg の表示領域の高さ（ビューポート）
      //
      /**
       * viewBox="X座標の最小値 Y座標の最小値 X軸の幅 Y軸の高さ"
       * 今回は X軸の幅 がビューポートより 180 大きいので、X軸の幅 がビューポートの横幅いっぱいに適用され、結果、Y軸の高さ は上下に 90 ずつ余白が生まれる。
       * ❗️❗️ 数値の単位は px ではなく、ビューポートに対する比率。なので大きさが変わっても描画が保持される。
       *
       * viewBox のわかりやすい説明
       * https://www.indetail.co.jp/blog/13002/
       */
      viewBox={`-90 0 ${size + 180} ${size}`}
      style={fullWidth ? { width: "100%", height: "100%" } : undefined}
    >
      {/* ❗️❗️ svg タグ内の要素は、HTML とは異なり、レイヤー構造のように順に重ねられる。 */}

      {/* base */}
      <g // g タグはグループ化の役割。
        // translate によって、起点を左上でなくビューポートの中心に変更。
        transform={`translate(${size / 2},${size / 2})`}
      >
        {/* 外側の五角形 */}
        <g>
          {/* path の詳しい説明 */}
          {/* http://defghi1977.html.xdomain.jp/tech/svgMemo/svgMemo_03.htm */}
          <path // path タグは任意の図形を作成できる。
            d={noSmoothing(
              [1, 1, 1, 1, 1].map((data, index) => {
                return [
                  polarToX((Math.PI * 2 * (index + 1)) / 5, (data * size) / 2),
                  polarToY((Math.PI * 2 * (index + 1)) / 5, (data * size) / 2),
                ];
              })
            )}
            stroke={stroke} // 線の色
            strokeWidth={8} // 線の太さ
            fill={"none"} //
          />
          {/* 内側の五角形 */}
          <path
            d={noSmoothing(
              [1, 1, 1, 1, 1].map((data, index) => {
                return [
                  polarToX((Math.PI * 2 * (index + 1)) / 5, (data * size) / 2 / 2),
                  polarToY((Math.PI * 2 * (index + 1)) / 5, (data * size) / 2 / 2),
                ];
              })
            )}
            stroke={stroke}
            strokeWidth={1}
            fill={"none"}
          />
        </g>

        {/* line */}
        <g>
          {[1, 2, 3, 4, 5].map((point, index) => (
            <polyline
              key={"poliline-" + index}
              stroke={stroke}
              points={points([
                [0, 0],
                [
                  polarToX((Math.PI * 2 * (index + 1)) / 5, size / 2),
                  polarToY((Math.PI * 2 * (index + 1)) / 5, size / 2),
                ],
              ])}
            />
          ))}
        </g>

        {/* caption */}
        <g>
          {[
            { name: "vision", translate: "20,-20" },
            { name: "relation", translate: "0,20" },
            { name: "boss", translate: "-80,20" },
            { name: "team", translate: "-105,-20" },
            { name: "member", translate: "-43,-60" },
          ].map((caption, index) => (
            <image
              key={"caption-" + index}
              href={`/img/${caption.name}.png`}
              height="40px"
              x={polarToX((Math.PI * 2 * (index + 1)) / 5, ((size + 0) / 2) * 0.95).toFixed(4)}
              y={polarToY((Math.PI * 2 * (index + 1)) / 5, ((size + 0) / 2) * 0.95).toFixed(4)}
              transform={`translate(${caption.translate})`}
            />
          ))}
        </g>

        {/* data */}
        <g>
          {chartData &&
            chartData.map((data: ChartData, index) => (
              <g key={`shape-${index}`}>
                <path
                  d={noSmoothing(
                    data.val.map((v, index) => {
                      return [
                        polarToX((Math.PI * 2 * (index + 1)) / 5, ((v / 5) * size) / 2),
                        polarToY((Math.PI * 2 * (index + 1)) / 5, ((v / 5) * size) / 2),
                      ];
                    })
                  )}
                  stroke={BASE_COLORS[data.color]}
                  strokeWidth={1}
                  fill={BASE_COLORS[data.color]}
                  css={styles.shape}
                />

                {data.val.map((v, valIndex) => (
                  <Fragment key={`val-${index}-${valIndex}`}>
                    <circle
                      cx={polarToX((Math.PI * 2 * (valIndex + 1)) / 5, ((v / 5) * size) / 2)}
                      cy={polarToY((Math.PI * 2 * (valIndex + 1)) / 5, ((v / 5) * size) / 2)}
                      stroke={BASE_COLORS[data.color]}
                      fill={BASE_COLORS[data.color]}
                    />
                    <text
                      x={polarToX((Math.PI * 2 * (valIndex + 1)) / 5, ((v / 5) * size) / 2)}
                      y={polarToY((Math.PI * 2 * (valIndex + 1)) / 5, ((v / 5) * size) / 2)}
                      dy={-10}
                      fill={BASE_COLORS[data.color]}
                    >
                      {v}
                    </text>
                  </Fragment>
                ))}
              </g>
            ))}
        </g>
      </g>
    </svg>
  );
};

const styles = {
  shape: css`
    fill-opacity: 0.3;
  `,
};
