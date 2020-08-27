import React from "react";
import Pill, {PillsGroup} from ".";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    onClick: {action: "clicked"}
  }
};

const onClick = () => alert("clicked");

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
  label: "Active",
  onClick
};

export const NotActivePill = Template.bind({});
NotActivePill.args = {
  active: false,
  label: "Not Active",
  onClick
};

export const DisabledPill = Template.bind({});
DisabledPill.args = {
  disabled: true,
  label: "Disabled",
  onClick
};

export const OnClick = Template.bind({});
OnClick.args = {
  active: true,
  label: "Click me 👆",
  onClick
};
