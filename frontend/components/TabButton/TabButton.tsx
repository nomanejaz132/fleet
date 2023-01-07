import React from "react";

export type TabButtonState = "default" | "active";

export type TabButtonStyle = {
  state?: TabButtonState;
  label: string;
};

export type TabButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  TabButtonStyle;

export const TabButton: React.FC<TabButtonProps> = ({
  state = "defult",
  label,
  ...props
}) => {
  return (
    <button
      className={`py-[10px] px-4 text-sm text-center hover:text-[#23262F] font-medium ${
        state === "active"
          ? "bg-[#F4F5F6] text-[#23262F]"
          : "bg-transparent text-[#777E90] hover:border-[#E6E8EC]"
      } border border-transparent rounded-full`}
      {...props}
      //   disabled
    >
      {label}
    </button>
  );
};
