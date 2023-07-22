import { ComponentStory, ComponentMeta } from "@storybook/react";

import { XXXXX } from "./XXXXX";
import code from "./XXXXX.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "XXXXX",
  component: XXXXX,
} as ComponentMeta<typeof XXXXX>;

const Template: ComponentStory<typeof XXXXX> = () => <XXXXX />;

export const Basic = Template.bind({});
// Basic.args = {};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
