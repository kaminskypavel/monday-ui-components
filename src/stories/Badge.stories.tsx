import React from 'react';
import Badge from "../components/Badge";

export default {
    title: 'Components/Badge',
    component: Badge
};

const Template: any = (args: any) => <Badge {...args}/>;

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
    count: 5,
    size: "big",
    type:"primary"
};

export const NotificationBadge = Template.bind({});
NotificationBadge.args = {
    count: 5,
    size: "big",
    type:"notification"
};

export const DarkBadge = Template.bind({});
DarkBadge.args = {
    count: 5,
    size: "big",
    type:"dark"
};
export const SecondaryBadge = Template.bind({});
SecondaryBadge.args = {
    count: 5,
    size: "big",
    type:"secondary"
};
