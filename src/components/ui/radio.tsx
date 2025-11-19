interface RadioProps {
    questionId: number;
}

const Radio = ({questionId}: RadioProps) => {
    return (
        <div className="flex items-center gap-16 justify-center">
            <span className="text-lg text-black">Tidak Mewakili</span>
            <div className="flex items-center gap-16">
                {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="cursor-pointer">
                        <input 
                            type="radio" 
                            name={`question-${questionId}`} 
                            className="hidden peer"
                        />
                        <div className="w-10 h-10 rounded-full bg-[#7486E6] bg-opacity-25 peer-checked:bg-[#3354FF] transition-all duration-200">
                        </div>
                    </label>
                ))}
            </div>
            <span className="text-lg text-black">Sangat Mewakili</span>
        </div>
    );
};

export default Radio;