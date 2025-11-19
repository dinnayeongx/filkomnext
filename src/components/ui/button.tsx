import type React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button className={`px-10 py-2 font-semibold bg-primary text-white rounded-full hover:bg-[#D9E0FF] hover:text-primary transition-all duration-200 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;