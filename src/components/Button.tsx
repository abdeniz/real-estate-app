import React, {ReactNode} from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  background?: boolean;
};

const Button = ({children, background = true}: ButtonProps) => {
  return <ButtonWrapper background={background}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.div<{background: boolean}>`
  font-size: 14px;
  letter-spacing: 0.2px;

  padding: 12px 64px;
  border-radius: 50px;
  width: 100%;
  text-align: center;
  background-color: ${({background}) =>
    background ? "var(--color-black)" : "none"};

  color: ${({background}) =>
    background ? "var(--color-white)" : "var(--color-black)"};
`;

export default Button;
