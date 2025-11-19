interface CardCareerHomeProps {
    title: string;
    icon: string;
}

const CardCareerHome = ({ title, icon }: CardCareerHomeProps) => {
    return (
        <div className="bg-[#D9E0FF] py-20 px-6 rounded-[80px] w-80 h-80 flex items-start shrink-0 overflow-hidden relative drop-shadow-md cursor-pointer hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold w-44 justify-start items-start z-10">{title}</h3>
            <div className="bg-[#7486E6] bg-opacity-25 rounded-full p-5 absolute right-0 translate-x-1/4 top-12">
                <div className="bg-[#7486E6] bg-opacity-60 rounded-full h-48 w-48 flex items-center justify-center">
                    <img src={icon} alt="" className="w-14"/>
                </div>
            </div>
        </div>
    );
};

export default CardCareerHome;