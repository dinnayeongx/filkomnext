import { useState } from "react";
import Radio from "../components/ui/radio";
import ProgressBar from "../components/ui/progressBar";
import Questions from "../data/question";
import Button from "../components/ui/button";
import Dialog from "../components/ui/dialog";

const question_per_page = 10;

const Quiz = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialog, setShowDialog] = useState(false);

  const startIndex = (currentPage - 1) * question_per_page;
  const endIndex = startIndex + question_per_page;

  const currentQuestions = Questions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Questions.length / question_per_page);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollTo({ top: 0, behavior: "smooth" });
    } 
    else {
      setShowDialog(true);
    }
  };

  return (
    <div className="bg-primary bg-opacity-5 py-16 px-10 flex flex-col items-start min-h-[150vh] relative z-0">
      <div className="flex flex-col gap-16 mx-auto justify-center items-center">
        <img src="/FilkomNEXT.svg" alt="" className="mx-auto" />
        <ProgressBar progress={(currentPage / totalPages) * 100} currentPage={currentPage}/>
        {currentQuestions.map((q) => (
          <div key={q.id} className="flex flex-col gap-6 text-center mb-8">
            <span className="font-semibold text-2xl">{q.id}. {q.question}</span>
            <Radio questionId={q.id} />
          </div>
        ))}
        <Button onClick={handleNext} variant="primary">
          {currentPage === totalPages ? "Selesai" : "Selanjutnya"}
        </Button>
      </div>

      {showDialog && (
        <Dialog
          title="Apakah Anda Yakin Selesai?"
          description="Anda tidak dapat kembali ke halaman ini setelah lanjut."
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default Quiz;