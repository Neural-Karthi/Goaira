import React, { useState } from 'react';
import Down_arrow from '../assets/images/Down_arrow.svg';

const Question_component = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="py-10  flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-Plancsemibold text-center">{props.type === "Driver" ? "Driver" : props.type === "Franchise" ? "GoAira Franchise" : "GoAira -"} Support FAQS</h1>
        <h1 className="text-sm md:text-xl py-1 md:py-2">Checkout the below</h1>
        <div className="w-[90%] md:w-[75%] pt-10 lg:w-[60%] 2xl:w-[50%] space-y-4">
          {props.questions.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-5 md:p-8 border border-[#AAAAAA] rounded-2xl md:rounded-4xl transition-transform duration-300 ease-in-out"
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h1 className="text-[16px] md:text-2xl flex-1 font-semibold">{faq.question}</h1>
                <img
                  src={Down_arrow}
                  alt="Toggle Answer"
                  
                  className={`w-8 lg:w-10 transform transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm md:text-lg text-[#606568]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question_component;
