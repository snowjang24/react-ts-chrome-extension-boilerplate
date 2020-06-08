import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => <button>{props.children}</button>;

export default Button;
