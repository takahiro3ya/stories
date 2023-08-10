import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pentagon, ChartData } from "./Pentagon";
import code from "./Pentagon.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  // title: "Pentagon",
  component: Pentagon,
} as ComponentMeta<typeof Pentagon>;

const chartData: ChartData[] = [
  { val: [2.8, 1.5, 3.9, 0.8, 3.4], color: "primary" },
  { val: [2.8, 4.5, 1.9, 1.8, 1.4], color: "secondary" },
];

const Template: ComponentStory<typeof Pentagon> = (args) => <Pentagon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  chartData,
};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  chartData,
  fullWidth: true,
};
