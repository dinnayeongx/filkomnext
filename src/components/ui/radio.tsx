const Radio = () => {
    return (
        <div className="flex items-center gap-24 justify-center">
            <span className="text-2xl text-black">Tidak Mewakili</span>
            <div className="flex items-center gap-24">
                {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="cursor-pointer">
                        <input 
                            type="radio" 
                            name="rating" 
                            className="hidden peer"
                        />

                        <div className="w-14 h-14 rounded-full bg-[#7486E6] peer-checked:bg-[#3354FF] transition-all duration-200">
                        </div>
                    </label>
                ))}
            </div>
            <span className="text-2xl text-black">Sangat Mewakili</span>
        </div>
    );
};

export default Radio;