import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ObjectNArray } from "./ObjectNArray";

export default {
  component: ObjectNArray,
} as ComponentMeta<typeof ObjectNArray>;

const Template: ComponentStory<typeof ObjectNArray> = () => <ObjectNArray  />;

export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };
// Primary.parameters = {
//   docs: {
//     source: {
//       code,
//     },
//   },
// };
