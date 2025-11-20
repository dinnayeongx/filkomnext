import { useRef } from "react";
import Button from "../components/ui/button";
import CardCareerHome from "../components/ui/cardCareerHome";

const Home = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 400;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-primary bg-opacity-5 py-16 flex flex-col items-start min-h-[150vh] relative z-0">
      <div className="flex gap-12 px-20">
        <img src="/image-landing-page.svg" alt="" className="h-[600px]" />
        <div className="flex flex-col gap-16 items-start justify-center z-20">
          <img src="/FilkomNEXT.svg" alt="" className="h-16" />
          <p className="text-xl w-[560px]">
            Temukan karier teknologi yang paling cocok dengan kepribadianmu!{" "}
            <br /> FILKOMNEXT membantu kamu mengenali potensi diri menggunakan
            model O*NET dan mencocokkannya dengan berbagai jalur karier di
            bidang teknologi seperti Data Science, Cybersecurity, UI/UX,
            Software Engineering, dan lainnya.
          </p>
          <Button
            variant="primary"
            onClick={() => (window.location.href = "/quiz")}
          >
            Mulai Kuis
          </Button>
        </div>
        <img src="/gradient.png" alt="" className="absolute right-0" />
      </div>

      <div className="bg-bg-hero mt-8 pb-36 w-full flex justify-center items-center bg-no-repeat bg-contain h-[900px] gap-16 z-20 px-28">
        <button onClick={() => scroll("left")}>
          <img src="/arrow.svg" alt="" className="rotate-180 h-24" />
        </button>
        <div
          ref={carouselRef}
          className="flex gap-12 overflow-hidden overflow-x-hidden no-scrollbar scroll-smooth p-16"
        >
          <CardCareerHome title="Software Engineer" icon="/logo-soft-eng.svg" />
          <CardCareerHome title="Data Analyst" icon="/logo-data.svg" />
          <CardCareerHome title="Cyber Security" icon="/logo-cyber.svg" />
          <CardCareerHome title="UI/UX Designer" icon="/logo-uiux.svg" />
          <CardCareerHome title="Product Management" icon="/logo-pm.svg" />
          <CardCareerHome title="Frontend Developer" icon="/logo-fe.svg" />
          <CardCareerHome title="Backend Developer" icon="/logo-be.svg" />
        </div>
        <button onClick={() => scroll("right")}>
          <img src="/arrow.svg" alt="" className="h-24" />
        </button>
      </div>

      <div className="px-28 gap-12 flex flex-col mb-52">
        <h1 className="text-7xl font-semibold">Artikel</h1>
        <p className="text-2xl">
          Bagaimana Kepribadianmu Mempengaruhi Pilihan Karier di Bidang
          Teknologi? <br /> <br /> Setiap individu memiliki kekuatan unik dari
          pemecah masalah logis hingga desainer yang empatik. <br /> FILKOMNEXT
          menghubungkan hasil asesmen kepribadian berbasis O*NET dengan jalur
          karier teknologi yang paling sesuai.
        </p>
        <Button
          variant="primary"
          onClick={() => (window.location.href = "/article")}
        >
          Lihat Selengkapnya
        </Button>
      </div>
    </div>
  );
};

export default Home;
