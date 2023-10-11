import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import code from "./Tooltip.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => (
  <Tooltip
    balloonId="balloon"
    title="ここにテキストが入ります。"
    body={`ここにテキストが入ります。\nここにテキストが入ります。\nここにテキストが入ります。`}
  />
);

export const Basic = Template.bind({});
// Basic.args = {};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
