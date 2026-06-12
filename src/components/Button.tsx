import React from "react";

const buttonType = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-btn-secondary text-primary hover:bg-primary hover:text-btn-secondary",
  donate: "bg-btn-secondary text-primary hover:bg-cream-highlight",
  primaryOutline:
    "bg-transparent hover:bg-btn-secondary text-btn-secondary hover:text-primary border border-btn-secondary",
};

interface ButtonProps {
  text: string;
  type: keyof typeof buttonType;
  children?: React.ReactNode;
  iconDirection?: "start" | "end";
}

function Button({
  text,
  type,
  children,
  iconDirection = "start",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${buttonType[type]}
      ${children ? "gap-2" : ""}
      transition-colors duration-300 cursor-pointer px-4 py-2 rounded flex justify-center items-center`}
    >
      {iconDirection === "start" && (
        <span className="text-2xl">{children}</span>
      )}
      {text}
      {iconDirection === "end" && <span className="text-2xl">{children}</span>}
    </button>
  );
}

export default Button;
