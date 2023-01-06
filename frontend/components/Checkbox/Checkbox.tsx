import React, { HTMLInputTypeAttribute } from "react";

export type Checkbox = {
  label: string;
};

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputTypeAttribute> &
  Checkbox;

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className=" ml-5 mt-5 flex items-center gap-3">
      <input
        type="checkbox"
        // intermediate
        id={label}
        aria-label={label}
        className="w-6 h-6 appearance-none rounded focus:outline-none focus:ring-0 focus:ring-offset-0 checked:opacity-0 absolute cursor-pointer bg-[#FCFCFD] dark:bg-[#23262F] border-2 border-[#E6E8EC] dark:border-[#353945]"
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
          <path
            d="M6 12L10 16L18 8"
            stroke="#FCFCFD"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
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
