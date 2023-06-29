import React, { Children } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //? here means the property is optional
  onClick: () => void;
}

const Button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
