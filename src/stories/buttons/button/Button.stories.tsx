import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import code from "./Button.code";

export default {
  // title: "Example/Button",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  priority: "primary",
};
Primary.parameters = {
  docs: {
    source: {
      code,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  priority: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  priority: "primary",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  priority: "primary",
  size: "lg",
};

export const None = Template.bind({});
