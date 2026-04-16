import React from "react";

const Languages = () => {
  const languages = [
    {
      name: "Dutch",
      level: "Intermediate",
      flag: "https://flagcdn.com/w40/nl.png",
    },
    {
      name: "English",
      level: "Fluent",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      name: "Nepali",
      level: "Native",
      flag: "https://flagcdn.com/w40/np.png",
    },
  ];

  return (
    <>
      <div className="font-semibold ml-4 text-[#4c7753]  text-[24px]">
        Languages
      </div>
      <hr className="flex my-2 ml-4 h-1 w-[8%] bg-[#4c7753]" />
      <div className="text-[25px] py-4 px-2 ml-4 mb-2">
        
          
            {/* Title */}

            {/* Language List */}
            <div className="flex flex-col gap-5">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-l from-white to-[#b3cab7] rounded-xl px-2 py-2 hover:scale-[1.02] transition duration-300"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={lang.flag}
                      alt={`${lang.name} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#4c7753] font-semibold text-[18px]">
                      {lang.name}
                    </h3>
                    <p className="text-[#4c7753] text-[14px] mt-1">
                      {lang.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
    
    </>
  );
};

export default Languages;
