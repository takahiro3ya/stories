import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VariousTabs } from "./VariousTabs";
import code from "./VariousTabs.code";

const tabList = ["foo", "bar", "baz"];

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "VariousTabs",
  component: VariousTabs,
} as ComponentMeta<typeof VariousTabs>;

const Template: ComponentStory<typeof VariousTabs> = () => <VariousTabs />;

export const Basic = Template.bind({});
Basic.args = {
  tabs: tabList.map((tab, i) => ({ label: tab, link: String(i + 1), content: <div>{tab}</div> })),
};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
