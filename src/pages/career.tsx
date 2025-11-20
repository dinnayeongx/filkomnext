import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Tabs from "../components/ui/tabs";
import Section from "../components/ui/section";
import careerData from "../data/careerData";

import BackButton from "../../public/back.svg";

const ImgResult = () => (
  <div className="flex flex-col gap-4 px-20 mx-auto mb-10 justify-center items-center">
    <img
      src="result.svg"
      alt="Test Results"
      className="w-[500px] rounded-2xl mx-auto"
    />
    <p className="text-xl font-normal">
      Top 3 Karier yang Paling Cocok Dengan Kamu
    </p>
  </div>
);

const ImgArticle = () => (
  <div className="flex flex-col gap-3 px-20 mx-auto mb-10 justify-center items-center">
    <p className="text-xl font-normal">Software Engineer</p>
    <img
      src="se-pict.svg"
      alt="Software Engineer"
      className="w-[600px] rounded-2xl mx-auto"
    />
  </div>
);

interface CareerProps {
  isArticlePage: boolean;
}

export default function Career({ isArticlePage }: CareerProps) {
  const [selected, setSelected] = useState(0);
  const section = careerData.sections[selected];

  const navigate = useNavigate();
  const Hero = isArticlePage ? ImgArticle : ImgResult;

  const handleNavigation = () => {
    isArticlePage ? navigate("/pathLearn") : navigate("/");
  };

  return (
    <div>
      <header className="flex items-center justify-between px-6 pt-6 h-20 mb-7">
        <button
          onClick={handleNavigation}
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
        >
          <img src={BackButton} alt="Back" className="w-[24px] h-[24px]" />
        </button>

        <img src="FilkomNEXT.svg" alt="Logo" className="w-[150px]" />
      </header>

      <div className="bg-primary bg-opacity-5 py-16 flex flex-col items-start min-h-[150vh] relative">
        <Hero />

        <div className="flex flex-col gap-12 px-20 mx-auto justify-center items-center">
          <Tabs
            tabs={careerData.tabs}
            selected={selected}
            setSelected={setSelected}
          />

          <Section section={section} isArticle={isArticlePage} />
        </div>
      </div>
    </div>
  );
}
