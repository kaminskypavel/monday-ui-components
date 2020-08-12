import React from "react";
import 'fontsource-roboto';
import "./badge.scss";

type Props = {
    size: "big" | "small" | "notification"
    type: "primary" | "dark" | "notification" | "secondary"
    count: number
    children?: React.ReactNode;

}

export const Badge = (props: Props) => {
    const {
        count,
        type = "primary"
    } = props;
    return (<div className="wrapper">
        <span className={`badge ${type}`}>{count}</span>
    </div>)
}

