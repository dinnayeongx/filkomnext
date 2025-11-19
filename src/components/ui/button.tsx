import type React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
    return (
        <button className={`px-10 py-2 w-fit text-xl font-semibold text-white rounded-full hover:bg-[#D9E0FF] transition-all duration-200 drop-shadow-md ${variant === "primary" ? "bg-[#3354FF] hover:text-[#3354FF]" : "bg-[#FF3333] hover:text-[#FF3333]"}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;