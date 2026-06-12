import React from "react";

import { CgArrowLongRight } from "react-icons/cg";

interface QuickactionCardProps {
    
  children: React.ReactNode;
  title: string;
  description: string;
}

function QuickactionCard({
  children,
  title,
  description,
}: QuickactionCardProps) {
  return (
    <div className="p-6 rounded-3xl flex flex-col items-center gap-4 border-2 border-neutral hover:shadow-2xl transition-shadow duration-300">
      <div className="text-6xl text-primary">{children}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-center text-pretty hidden md:block">{description}</p>
      <CgArrowLongRight className="text-primary cursor-pointer  scale-100 transition-transform duration-200 hover:scale-125" />
    </div>
  );
}

export default QuickactionCard;
