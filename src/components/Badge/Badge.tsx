import React from "react";
import "fontsource-roboto";
import "./badge.scss";

type Props = {
  size: "big" | "small" | "notification";
  type: "primary" | "dark" | "notification" | "secondary";
  count: number;
};

export const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const {count, size, type = "primary"} = props;
  return (
    <div className="wrapper">
      <span className={`badge ${type} ${size}`}>{count}</span>
    </div>
  );
};
