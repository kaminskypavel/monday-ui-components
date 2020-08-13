import React from "react";
import "fontsource-roboto";
import "./button.scss";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  type?: "primary" | "success" | "error" | "info";
  label: string;
};

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {label, onClick, disabled = false, type = "primary"} = props;
  return (
    <button
      type="button"
      className={type}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
};
