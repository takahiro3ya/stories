import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import code from "./Modal.code";

import { Button } from "@/stories/buttons/Button";

export default {
  // サイドバーの階層設定
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  title: "modal/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button priority="primary" onClick={handleOpen}>
        Open
      </Button>
      <Modal {...args} open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  docs: {
    source: {
      code,
    },
  },
};
