import React from "react";
import Pill, {PillsGroup} from ".";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    onClick: {action: "clicked"}
  }
};

const Template: any = (args: any) => <Pill {...args} />;

export const GroupOfPills = () => (
  <PillsGroup>
    <Pill label="Days" active />
    <Pill label="Weeks" />
    <Pill label="Months" />
  </PillsGroup>
);

export const ActivePill = Template.bind({});
ActivePill.args = {
  active: true,
  label: "Active"
};

export const NotActivePill = Template.bind({});
NotActivePill.args = {
  active: false,
  label: "Not Active"
};

export const DisabledPill = Template.bind({});
DisabledPill.args = {
  disabled: true,
  label: "Disabled",
  onClick: () => alert("clicked")
};

export const OnClick = Template.bind({});
OnClick.args = {
  label: "Click me 👆"
};
