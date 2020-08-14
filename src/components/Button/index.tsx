import React from "react";
import "fontsource-roboto";
import styled from "styled-components";
import {color} from "../shared/styles";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  type: "primary" | "success" | "error" | "info";
  label: string;
};

const ButtonComponent = styled.button<{disabled: boolean; buttonType: string}>`
  outline: none;
  color: #ffffff;
  padding: 12px 24px 12px 24px;
  display: inline-flex;
  border-radius: 30px;
  border: none;
  line-height: 128%;
  background-color: ${({buttonType, disabled}) => {
    if (disabled) {
      return "#c6c6c6";
    }

    switch (buttonType) {
      case "success":
        return "#23b86f";
      case "info":
        return "#e2e227";
      case "error":
        return "#f44336";

      case "primary":
      default:
        return color.primary;
    }
  }};
`;

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {label, onClick, disabled = false, type = "primary"} = props;
  return (
    <ButtonComponent buttonType={type} disabled={disabled} onClick={onClick}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
