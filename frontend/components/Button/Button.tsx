import React from "react";

export type ButtonSize = "small" | "medium" | "full";

export type ButtonVariant = "primary" | "secondary";

export type ButtonState = "default" | "disabled" | "loading";

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
    <button
      className={`button ${size} ${variant} ${state}`}
      {...props}
      //   disabled
    >
      {iconType === "lead" && icon}
      {children}
      {iconType === "tail" && icon}
      {state === "loading" && "loading"}
    </button>
  );
};
