const code = `
/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { css } from "@emotion/react";

import { COLORS } from "@/constants/colors";
import { minScreen, maxScreen } from "@/utils/mediaQueries";

type Tab = {
  label: string;
  link: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

export const Tab: FC<Props> = ({ tabs }) => {
  const { content } = useParams<{ content: string }>();

  const activeTab = tabs.find((el) => el.link === content);

  return (
    <>
      <nav css={styles.tabHeader}>
        {tabs.map((tab) => (
          <Link to={\`/tab/\${tab.link}\`} key={\`\${tab.label}-\${tab.link}\`}>
            {tab.label}
          </Link>
        ))}
      </nav>

      <div>{activeTab?.content ?? "No content"}</div>
    </>
  );
};

const styles = {
  tabHeader: css\`
    display: flex;

    \${minScreen("md")} {
      align-items: center;
      height: 42px;
      background-color: white;
      padding: 4px;
      border-radius: 21px;
    }

    input {
      display: none;
    }
    & > label:first-of-type {
      border-top-left-radius: 4px;
    }
    & > label:last-of-type {
      border-top-right-radius: 4px;
    }
  \`,

  tabLabel: css\`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9;
    /* color: constants.COLOR_GRAY_DARK; */
    /* font-size: 12px; */
    font-weight: bold;
    cursor: pointer;

    \${maxScreen("md")} {
      flex: 1;
      height: 100%;
      border-radius: 17px;
    }
    \${minScreen("md")} {
      width: 108px;
      height: 35px;
    }
  \`,
  checked: css\`
    background-color: \${COLORS.primary};
    color: white;
    cursor: default;
  \`,
};
`;
export default code;
