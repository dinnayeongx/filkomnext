import React from "react";
import Card from "../components/ui/card.tsx";
import { Link } from "react-router-dom";

export default function CareersPage() {
  const careers = [
    { title: "Product Management", icon: "/logo-pm.svg" },
    { title: "Front End Developer", icon: "/logo-fe.svg" },
    { title: "Back End Developer", icon: "/logo-be.svg" },
    { title: "Software Engineer", icon: "/logo-soft-eng.svg" },
    { title: "AI Engineer", icon: "/logo-ai.svg" },
    { title: "Data Analyst", icon: "/logo-data.svg" },
    { title: "Cyber Security", icon: "/logo-cyber.svg" },
    { title: "UI/UX Designer", icon: "/logo-uiux.svg" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F7FF] px-6 pt-10">
      {/* Header */}
      <Link to="/">
        <img src="FilkomNEXT.svg" alt="Logo" className="w-[150px]" />
      </Link>
      {/* Filter + Search */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {/* Filter Button */}
        <button className="w-[55px] h-[35px] bg-white shadow rounded-full flex items-center justify-center">
          <img src="/filter.png" className="w-5" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 w-[600px] h-[35px] shadow">
          <input
            type="text"
            placeholder="Search Bar"
            className="flex-1 text-sm outline-none"
          />
          <img src="/search.png" className="w-4 opacity-60" />
        </div>
      </div>

      {/* Grid */}
      <div className="pl-9 pr-9">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pb-0">
          {careers.map((c) => (
            <Card key={c.title} title={c.title} icon={c.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
