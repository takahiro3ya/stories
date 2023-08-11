/** @jsxImportSource @emotion/react */
import { useEffect, useCallback } from "react";

import { css } from "@emotion/react";

import { StoryTag, WarningMsg } from "@/auxiliary-components";

const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
const tableRowList: { name: string; val: number }[] = [
  { name: "Anna", val: 0 },
  { name: "James", val: 10 },
  { name: "Jennifer", val: 20 },
  { name: "Jeremiah", val: 30 },
  { name: "Jocelyn", val: 40 },
  { name: "Benjamin", val: 50 },
  { name: "Zed", val: 60 },
  { name: "Frank", val: 70 },
  { name: "Chris", val: 80 },
  { name: "Sarah", val: 90 },
  { name: "Rob", val: 100 },
  { name: "Danielle", val: 110 },
  { name: "Mike", val: 120 },
  { name: "Miranda", val: 130 },
  { name: "John", val: 140 },
  { name: "Ben", val: 150 },
  { name: "Dick", val: 160 },
  { name: "Becky", val: 170 },
  { name: "Judy", val: 180 },
  { name: "Kate", val: 190 },
  { name: "Ora", val: 200 },
];

export const Sticky = () => {
  const targetIds = ["scrollWrapperId", "stickyScrollbarId"];

  const listener = useCallback((e: Event) => {
    const { id: targetId, scrollLeft } = e.target as HTMLDivElement;
    const anotherEl = document.getElementById(targetIds.find((id) => id !== targetId) ?? "");

    if (anotherEl) {
      anotherEl.scrollTo(scrollLeft, 0);
    }

    // 同期がずれていないかのチェック用。
    // const anotherLeft = anotherEl?.scrollLeft;
    // console.log(scrollLeft, anotherLeft);
  }, []);

  // scrollbar with sticky
  useEffect(() => {
    const contentDoc = document.getElementById(targetIds[0]);
    const barDoc = document.getElementById(targetIds[1]);

    if (contentDoc && barDoc) {
      // コンテンツがタッチパッドやフリックによってスクロールしたら、分離したスクロールバーの方も同期してスクロールさせる。
      contentDoc.addEventListener("scroll", listener);
      // 分離したスクロールバーがスクロールしたら、コンテンツの方も同期してスクロールさせる。
      barDoc.addEventListener("scroll", listener);
    }

    return () => {
      if (contentDoc && barDoc) {
        contentDoc.removeEventListener("scroll", listener);
        barDoc.removeEventListener("scroll", listener);
      }
    };
  }, []);

  return (
    <>
      <WarningMsg>挙動は Canvas で確認。Docs だと position: sticky が効かない模様。</WarningMsg>

      <StoryTag tagName="header with sticky">
        <main css={styles.container}>
          <header css={styles.header}>HEADER</header>
          <div css={styles.content}>MAIN CONTENT</div>
          <footer>FOOTER</footer>
        </main>
      </StoryTag>

      {/* 参照: スクロールバーの複製 */}
      {/* https://dev.classmethod.jp/articles/css_scrollbar_adjustment/ */}
      <StoryTag tagName="scrollbar with sticky">
        <div>
          <div css={styles.scrollWrapper} id={targetIds[0]}>
            <p css={styles.scrollContent}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              <br />
              <br />
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>

          {/* 複製する横スクロールバー */}
          <div css={styles.stickyScrollbar} id={targetIds[1]}>
            <div css={styles.scrollInner}></div>
          </div>
        </div>
      </StoryTag>

      <StoryTag tagName="table with sticky">
        <div css={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Member</th>
                {alphabets.map((chr) => (
                  <th key={chr}>{chr.toUpperCase()}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableRowList.map(({ name, val }) => (
                <tr key={name}>
                  <td>{name}</td>
                  {[...Array(26).keys()].map((el) => (
                    <td key={el}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </StoryTag>
    </>
  );
};

const styles = {
  // --------------------
  // header with sticky

  container: css`
    max-width: 600px;
    border: solid 3px green;
    padding: 10px;

    & * {
      padding: 10px;
      background: #d6d6d6;
      border: dashed 3px #000;
    }
    /* "+ *" の意味 → 隣接している弟要素（ひとつ下の要素）、を表す。
      弟要素なので、一番上の <header> には適用されない */
    & * + * {
      margin-top: 24px;
    }
  `,
  header: css`
    height: 50px;
    border-color: red;
    position: -webkit-sticky; /* Safari 12.1 以前 */
    position: sticky;
    top: 0;
  `,
  content: css`
    min-height: 800px;
    border-color: blue;
  `,

  // --------------------
  // scrollbar with sticky

  scrollWrapper: css`
    width: 300px;
    height: 400px;
    background-color: #ceeff3;
    overflow-x: auto;

    /* スクロール機能は残しつつスクロールバーを隠す。*/
    /* for IE, Edge */
    -ms-overflow-style: none;
    /* for Firefox */
    scrollbar-width: none;
    /* for Chrome, Safari */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  scrollContent: css`
    width: 600px;
    padding: 16px;
  `,
  stickyScrollbar: css`
    width: 300px; // scrollWrapper とそろえる。
    height: 15px; // scrollbar の高さ
    background-color: #ceeff3;
    overflow-x: auto;
    overflow-y: hidden;
    position: -webkit-sticky; /* Safari 12.1 以前 */
    position: sticky;
    bottom: 0;
  `,
  scrollInner: css`
    height: 1px;
    width: 600px; // scrollContent とそろえる。
  `,

  // --------------------
  // table with sticky

  tableWrapper: css`
    /* width: 200px; */
    /* overflow-x: auto; ❗️❗️ 親要素や祖先要素に overflow が設定されていると sticky は効かないので要注意。 */

    & td,
    th {
      white-space: nowrap;
      padding: 8px 16px;
      text-align: center;
    }

    & th {
      position: -webkit-sticky; /* Safari 12.1 以前 */
      position: sticky;
      top: 0;
      z-index: 1;
      background-color: #ddffbf;

      &:first-of-type {
        left: 0;
        z-index: 2;
      }
    }

    & td {
      border-bottom: 1px solid #addd83;

      /* 行の先頭セルを sticky で固定 */
      &:first-of-type {
        background-color: #f4f4f4;
        position: -webkit-sticky; /* Safari 12.1 以前 */
        position: sticky;
        left: 0;
        text-align: left;
      }
    }
  `,
};
