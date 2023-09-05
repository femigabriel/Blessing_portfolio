import React, { useState } from "react";

export default function AboutMe() {
  return (
    <div className="p-5 pt-10 lg:px-20 flex items-center justify-center">
      <div>
        <h1 className="text-center text-[18px] uppercase font-semibold">
          Career Objectives
        </h1>
        <div className="lg:text-[18px] sm:text-[14px] text-gray-100 lg:w-[45em] sm:w-[38em] leading-relaxed  mt-20 tracking-widest mb-10">
          <p>
            I am responsible for risk management, supporting Head of Audits with
            various duties as required, collecting and analysing data, I also
            conduct periodic stock audit, monitor all financial activities. I
            have especially experienced customer service, store accounting and
            [research] toward team efforts and business improvements. I have an
            excellent communication skills. Smart and target driven.
          </p>
          <div className=" flex items-center justify-center">
            <img
              src="./assets/images/jebu-2.jpeg"
              className="cover mt-5"
              alt=""
            />
          </div>
          <p className="mt-10">
            I'm Seeking to leverage exceptional accounting skills, competencies,
            and academic knowledge to excel and make a difference in an
            accounting position in any firm. Dedicated, competent, and detail
            oriented individual with the capacity to go beyond what is expected
            and achieve company goals. An intelligent economist with a
            significant amount of expertise in education, healthcare, and
            hospitality industry. Possessing in-depth knowledge of complex
            economic concepts, mathematics, analytical, marketing, and adept at
            applying theories and ideas in real-world situations.
          </p>
        </div>
      </div>
    </div>
  );
}
