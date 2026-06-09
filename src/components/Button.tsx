import React from "react";

interface ButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  hoverText?: string;
  hoverColor: string;
  isBordered?: boolean;
  borderColor?: string;
  children?: React.ReactNode;
  iconDirection?: "start" | "end";
}

function Button({
  text,
  bgColor,
  textColor,
  hoverText,
  hoverColor,
  isBordered = false,
  borderColor,
  children,
  iconDirection = "start"
}: ButtonProps) {
  return (
    
    <button
      type="button"
      className={`${bgColor} text-${textColor} hover:${hoverColor} hover:text-${hoverText}
      ${isBordered ? `border border-${borderColor}` : ""}
      ${children ? "gap-2" : ""}
      transition-colors duration-300 cursor-pointer px-4 py-2 rounded flex justify-center items-center`}
       
    >
      {iconDirection === "start" && <span className="text-2xl">{children}</span>}
      {text}
      {iconDirection === "end" && <span className="text-2xl">{children}</span>}
    </button>
  );
}

export default Button;
