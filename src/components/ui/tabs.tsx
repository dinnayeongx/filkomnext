import React from "react";

interface TabsProps {
  tabs: string[];
  selected: number;
  setSelected: (index: number) => void;
}

export default function Tabs({ tabs, selected, setSelected }: TabsProps) {
  const activeBgColor = "bg-gray-200";
  const inactiveBgColor = "bg-gray-100";
  const activeTextColor = "text-gray-600";
  const inactiveTextColor = "text-gray-600";

  const extremeTopRoundClass = "rounded-tl-full rounded-tr-full";

  return (
    <div className="flex w-full relative z-10">
      {tabs.map((t, i) => {
        const isActive = selected === i;
        let roundedClasses = "";

        if (isActive) {
          if (i === 0) {
            roundedClasses = `${extremeTopRoundClass} rounded-tl-none rounded-bl-none rounded-br-none`;
          } else if (i === 1) {
            roundedClasses = `${extremeTopRoundClass} rounded-tr-none rounded-bl-none rounded-br-none`;
          }
        } else {
          roundedClasses = "rounded-md";
        }

        return (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`
              relative 
              w-1/2 
              py-4 
              text-base font-bold 
              transition-all duration-300 ease-in-out
              
              ${roundedClasses} 
              
              ${
                isActive
                  ? `${activeBgColor} ${activeTextColor} z-20 **shadow-md** **hover:font-extrabold**`
                  : `${inactiveBgColor} ${inactiveTextColor} **hover:font-semibold** z-10`
              }
            `}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
