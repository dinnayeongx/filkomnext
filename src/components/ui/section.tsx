import React from "react";

const getLastPathSegment = () => {
  if (typeof window === "undefined") return "";
  const segments = window.location.pathname
    .split("/")
    .filter((s) => s.length > 0);
  return segments.pop() || "";
};

const LevelAndSalaryDisplay = () => {
  return (
    <div className="flex w-fit justify-around p-4 rounded-lg shadow-sm mx-auto">
      <div className="text-center w-1/2 px-8">
        <h4 className="text-xl font-semibold text-gray-900">Level</h4>
        <p className="text-gray-700 text-sm">Menengah</p>
      </div>

      <div className="text-center w-1/2 px-8">
        <h4 className="text-xl font-semibold text-gray-900">Gaji</h4>
        <p className="text-gray-700 text-sm">1 Milyar</p>
      </div>
    </div>
  );
};

interface SectionProps {
  section: {
    image?: string;
    content: {
      title: string;
      items: {
        desc: string;
        buttonUrl?: string;
        buttonLabel?: string;
      }[];
    }[];
  };
  isArticle: boolean;
}

export default function Section({ section, isArticle }: SectionProps) {
  const lastSegment = getLastPathSegment();

  const isDeskripsi = section.content[0]?.title === "Software Engineer";

  return (
    <section className="space-y-10">
      {section.image && lastSegment === "career" && (
        <img
          src={section.image}
          alt="section-graphic"
          className="w-[600px] rounded-2xl mx-auto"
        />
      )}

      {section.content.map((block, idx) => (
        <div key={idx} className="space-y-4">
          {lastSegment === "career" && idx === 0 && isDeskripsi && (
            <LevelAndSalaryDisplay />
          )}

          <h3 className="text-xl font-semibold">{block.title}</h3>

          {block.items.map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="whitespace-pre-line leading-relaxed text-gray-700">
                {item.desc}
              </p>

              {item.buttonUrl && (
                <div className="flex justify-start pt-3">
                  <a
                    href={item.buttonUrl}
                    target="_blank"
                    className="
                      inline-block px-40 py-1 rounded-full
                      text-sm font-normal drop-shadow-md
                      bg-[#001F3F] text-white
                      transition-all duration-200 
                      hover:bg-[#655CFE]
                    "
                  >
                    {item.buttonLabel ?? "View More"}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
