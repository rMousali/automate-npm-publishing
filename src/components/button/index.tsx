import React, { FC } from "react";
import styled from "styled-components";

interface IButtonProps {
  children: any;
  primary?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick?: any;
}

const StyledButton = styled.button<any>`
  border-radius: 4px;
  background-color: ${(props) => (props.outline ? "white" : "red")};
  border: ${(props) => (props.outline ? "1px solid red" : "0px")};
  color: ${(props) => (props.outline ? "red" : "white")};
`;

const Button: FC<IButtonProps> = ({
  children,
  primary,
  outline,
  disabled,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      primary={primary}
      outline={outline}
      onClick={() => onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
