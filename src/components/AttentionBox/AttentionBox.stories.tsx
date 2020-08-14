import React from "react";
import AttentionBox from ".";

export default {
  title: "Components/AttentionBox",
  component: AttentionBox
};

const Template: any = (args: any) => (
  <AttentionBox
    title="Attention Box Title"
    body="Studies show that 100% of people who celebrate birthdays, will eventually die"
    {...args}
  />
);

export const PrimaryBadge = Template.bind({});
