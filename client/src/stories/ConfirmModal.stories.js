import { fn } from "@storybook/test";
import { ConfirmModal } from "../components";

export default {
  title: "ConfirmModal component",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    test: "tesssst",
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    open: true,
    title: 'My favourite movies',
    url: 'http://localhost:3000/recommend?title="my_movies"&ids=232,434',
    onClose: () => {}
  },
};
