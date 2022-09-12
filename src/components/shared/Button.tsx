import React from "react";

// interface to declare all our props types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className="inline-flex items-center justify-center h-12 px-6 rounded-3xl font-dms font-bold text-center text-base leading-[1px] text-[#FCFCFD] bg-[#3B71FE]"
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
