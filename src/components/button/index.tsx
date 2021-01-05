import React, { FC } from "react";
import "./index.css";

interface IButtonProps {
  children: any;
  primary?: boolean;
  disabled?: boolean;
  onClick?: any;
}

const Button: FC<IButtonProps> = ({
  children,
  primary,
  disabled,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={primary ? "btn btn--primary" : "btn"}
      disabled={disabled}
      onClick={() => onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button }