import React from "react";

export type ButtonSize = "small" | "medium" | "full";

export type ButtonVariant = "primary" | "light" | "dark";

export type ButtonState = "default" | "hover" | "disabled" | "loading";

export type ButtonIconType = "lead" | "tail" | "none";

export type ButtonStyle = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  iconType?: ButtonIconType;
  icon?: React.ReactNode;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyle;

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  state = "defult",
  iconType = "none",
  icon,
  children,
  ...props
}) => {
  return (
    <button className={`button ${size} ${variant} ${state}`} {...props}>
      {iconType === "lead" && icon}
      {children}
      {iconType === "tail" && icon}
      {state === "loading" && "loading"}
    </button>
  );
};
