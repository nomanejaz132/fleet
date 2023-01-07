import React, { HTMLInputTypeAttribute } from "react";

export type RadioButton = {
  label: string;
};

export type RadioButtonProps =
  React.InputHTMLAttributes<HTMLInputTypeAttribute> & RadioButton;

export const RadioButton: React.FC<RadioButtonProps> = ({ label }) => {
  return (
    <div className=" ml-5 mt-5 flex items-center gap-3">
      <input
        type="radio"
        id={label}
        aria-label={label}
        className="w-6 h-6 appearance-none rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0 checked:opacity-0 absolute cursor-pointer bg-[#FCFCFD] dark:bg-[#23262F] border-2 border-[#E6E8EC] dark:border-[#353945]"
      />
      <div className="w-6 h-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden"
        >
          <rect x="1" y="1" width="22" height="22" rx="11" fill="#FCFCFD" />
          <rect x="6" y="6" width="12" height="12" rx="6" fill="#3B71FE" />
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="11"
            stroke="#E6E8EC"
            stroke-width="2"
          />
        </svg>
      </div>

      <label
        htmlFor={label}
        className="text-sm text-[#141416] dark:text-[#FCFCFD] font-medium"
      >
        {label}
      </label>
    </div>
  );
};
