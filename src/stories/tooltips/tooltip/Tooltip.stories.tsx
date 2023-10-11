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
  <div style={{ display: "flex" }}>
    <Tooltip
      balloonId="balloon_1"
      title="バルーン1"
      body={`ここにテキストが入ります。\nここにテキストが入ります。\nここにテキストが入ります。`}
    />
    <div style={{ width: 200 }}></div>
    <Tooltip
      balloonId="balloon_2"
      title="バルーン2"
      body={`ここにテキストが入ります。\nここにテキストが入ります。\nここにテキストが入ります。`}
      width={100}
      positions={{ right: -20 }}
    />
  </div>
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
