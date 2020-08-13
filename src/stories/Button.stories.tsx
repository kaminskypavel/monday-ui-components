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
  type: "success",
  label: "Success"
};
export const InfoButton = Template.bind({});
InfoButton.args = {
  type: "info",
  label: "Info"
};

export const OnClick = Template.bind({});
OnClick.args = {
  label: "Click me 👆"
};
