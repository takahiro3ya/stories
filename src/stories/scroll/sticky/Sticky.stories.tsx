import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sticky } from "./Sticky";
import code from "./Sticky.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "scroll/Sticky",
  component: Sticky,
} as ComponentMeta<typeof Sticky>;

const Template: ComponentStory<typeof Sticky> = () => <Sticky />;

export const Basic = Template.bind({});
// Basic.args = {};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
scroll;
