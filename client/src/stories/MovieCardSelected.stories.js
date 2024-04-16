import { fn } from "@storybook/test";
import { MovieCardSelected } from "../components";
import { movies } from "./stub";

export default {
  title: "Card/Movie card selected",
  component: MovieCardSelected,
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
    movie: movies[0],
  },
};
