import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

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
      <p>Lorem ipsum dolor sit amet</p>
      <p>今日の天気は晴れ。降水確率は10%。明日も晴れるといいな。週末も晴れるといいな。</p>

      <button onClick={handleOpen}>モーダルを開く</button>
      <Modal {...args} open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
// Primary.parameters = {
//   docs: {
//     source: {
//       code,
//     },
//   },
// };
