import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, icon }) => {
  return (
    <Link
      to="/article"
      className=" relative overflow-hidden bg-[#B7D4FF] rounded-2xl p-5 relative h-[135px] 
                     flex flex-col justify-between shadow-sm cursor-pointer 
                     hover:scale-[1.03] transition"
    >
      <p className="text-[13px] font-semibold leading-tight max-w-[120px]">
        {title}
      </p>

      {/* circular gradient */}
      <div className="absolute -bottom-5 -right-5 w-[100px] h-[100px] rounded-full bg-[#99C2FF] opacity-60" />
      <div className="absolute -bottom-3 -right-3 w-[80px] h-[80px] rounded-full bg-[#7FB2FF] opacity-80" />

      {/* icon */}
      <img
        src={icon}
        alt={title}
        className="absolute bottom-3 right-3 w-[32px]"
      />
      {/* </div> */}
    </Link>
  );
};

export default Card;
