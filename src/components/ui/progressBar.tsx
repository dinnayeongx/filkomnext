const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="pb-10 px-28 border-8 border-[#A5C9FF] border-collapse rounded-full ">
        <h2 className="mt-3 mb-1">Halaman 1 dari 6</h2>
        <div className="w-[660px] bg-[#D9E0FF] rounded-lg h-9">
            <div className="bg-[#3354FF] rounded-lg h-9" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
  );
};

export default ProgressBar;