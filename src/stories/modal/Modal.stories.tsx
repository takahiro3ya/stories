import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import code from "./Modal.code";

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen}>モーダルを開く</button>
      <Modal {...args} open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
