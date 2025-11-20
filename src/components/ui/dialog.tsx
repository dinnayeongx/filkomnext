import { use } from "react";
import Button from "./button";
import { Link } from "react-router-dom";

interface DialogProps {
  title: string;
  description: string;
  isOpen?: boolean;
  onClose: () => void;
}

const Dialog = ({
  title,
  description,
  isOpen = false,
  onClose,
}: DialogProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[570px] h-[315px] bg-white border-8 border-[#A5C9FF] px-16 py-8 flex flex-col justify-center items-center gap-6 rounded-[50px] z-50">
        <h1 className="font-semibold text-xl text-black text-center">
          {title}
        </h1>
        <p className="text-black text-xl text-center">{description}</p>
        <div className="flex gap-10">
          <Link to="/career">
            <Button variant="primary">Iya</Button>
          </Link>
          <Button onClick={onClose} variant="secondary">
            Tidak
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dialog;
