import React from "react";
import "fontsource-roboto";
import styled from "styled-components";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
  label: string;
};

export const PillsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerText = styled.span`
  font-family: "Roboto", helvetica, arial, sans-serif;
  font-weight: 400;
  line-height: 19.5px;
  font-size: 13px;
`;

const PillComponent = styled.div<Pick<Props, "disabled" | "active">>`
  border: none;
  cursor: pointer;
  padding: 5px 16px 5px 16px;
  margin: 0 2px;
  text-decoration: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({active, disabled}) => {
    if (disabled) {
      return "#c6c6c6";
    }

    return active ? "#e5f4ff" : "none";
  }};

  color: ${({active, disabled}) => {
    if (disabled) {
      return "White";
    }

    return active ? "#0085FF" : "#1c1f3b";
  }};

  &:hover {
    background-color: ${({active}) => {
      return active ? "none" : "rgb(237, 238, 240)";
    }};
  }
`;

const Pill: React.FunctionComponent<Props> = ({
  label,
  onClick,
  disabled = false,
  active = false
}) => (
  <PillsGroup>
    <PillComponent active={active} disabled={disabled} onClick={onClick}>
      <InnerText>{label}</InnerText>
    </PillComponent>
  </PillsGroup>
);

export default Pill;
