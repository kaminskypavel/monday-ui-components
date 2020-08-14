import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: {action: "clicked"}
  }
};

const Template: any = (args: any) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  disabled: false,
  label: "Primary"
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  disabled: false,
  type: "success",
  label: "Success Button",
  onClick: () => alert("woo-hoo 🎉")
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  disabled: false,
  type: "info",
  label: "Info Button"
};

export const OnClick = Template.bind({});
OnClick.args = {
  label: "Click me 👆"
};
