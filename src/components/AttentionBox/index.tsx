// https://design.monday.com/03276924d/p/891cfe-attention-box/i/13675424
import React from "react";
import "fontsource-roboto";
import styled from "styled-components";
import {color, typography} from "../shared/styles";

type Props = {
  title: string;
  body: string;
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  background-color: #dff0ff;
  font-family: Roboto, monospace;
  text-align: left;
  border-radius: 10px;
  max-width: 340px;
`;

const Title = styled.div`
  color: ${color.dark};
  font-weight: bold;
  font-size: ${typography.size.mediumlarge};
`;

const Body = styled.p`
  color: ${color.dark};
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 22px;
`;

const AttentionBox: React.FunctionComponent<Props> = (props: Props) => {
  const {title, body} = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

export default AttentionBox;
