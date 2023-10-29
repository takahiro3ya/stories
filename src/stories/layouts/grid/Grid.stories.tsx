import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "./Grid";
import code from "./Grid.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "layouts/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => <Grid />;

export const Basic = Template.bind({});
// Basic.args = {};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
