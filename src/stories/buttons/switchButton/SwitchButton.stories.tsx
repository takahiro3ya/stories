import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchButton } from "./SwitchButton";
import code from "./SwitchButton.code";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "button/SwitchButton",
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => <SwitchButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  input: {
    onChange: () => {
      console.log("onChange!");
    },
  },
};
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};

export const Colorful = Template.bind({});
Colorful.args = {
  input: {
    onChange: () => {
      console.log("onChange!");
    },
  },
};
Colorful.args = {
  input: {
    onChange: () => {
      console.log("onChange! Colorful!");
    },
  },
  colors: {
    main: "tomato",
    back: "skyblue",
    knob: "yellow",
  },
};
