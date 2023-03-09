import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => <Modal>Modal content</Modal>;

export const Primary = Template.bind({});
// Primary.parameters = {
//   docs: {
//     source: {
//       code,
//     },
//   },
// };
