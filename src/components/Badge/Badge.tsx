import React from "react";
import "fontsource-roboto";
import styled from "styled-components";
import {color} from "../shared/styles";

type Props = {
  size: "big" | "small" | "notification";
  type: "primary" | "dark" | "notification" | "secondary";
  count: number;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeSpan = styled.div<Pick<Props, "type" | "size">>`
  display: inline-block;
  padding: 4px 10px 4px 10px;
  border-radius: 50%;
  text-align: center;
  font-family: Roboto, monospace;

  ${({type}) => {
    switch (type) {
      case "dark":
        return `
            background-color: ${color.dark};
            border: ${color.dark} 1px solid;
            color:  ${color.white}
        `;
      case "notification":
        return `
            background-color: #F65F7C;
            border: #F65F7C 1px solid;
            color:  ${color.white}
        `;
      case "secondary":
        return `
            background-color: ${color.white};
            border: ${color.primary} 1px solid;
            color:  ${color.primary}
        `;
      case "primary":
      default:
        return `
            background-color: ${color.primary};
            border: ${color.primary} 1px solid;
            color:  ${color.white}
        `;
    }
  }}
`;

export const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const {count, size, type = "primary"} = props;
  return (
    <Wrapper>
      <BadgeSpan type={type} size={size}>
        {count}
      </BadgeSpan>
    </Wrapper>
  );
};
