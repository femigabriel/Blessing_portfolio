import React, { useRef } from "react";
// import emailjs, { init } from "@emailjs/browser";

const handleSubmit = (e: any) => {
  e.preventDefault();
};

export default function Contacts() {
  return (
    <div>
      <div className="skills">
        <p className=" text-gray-400 ">
          <span className=" text-gray-600 font-semibold mr-2">Email :</span>
          <span className="text-gray-400"> jebutublessing@gmailcom</span>
        </p>
        <p className="text-[12px] w-full">
          <span className=" text-gray-600 w-full   mr-2">
            <span className="font-semibold mr-2"> Phone Numbers :</span>
            <span className="text-gray-400">
              +2348165655677, +2348081977497
            </span>
          </span>
        </p>
        <p className=" text-gray-400">
          <span className=" text-gray-600 font-semibold mr-2">Address :</span>
          <span className="text-gray-400"> Lekki, Lagos</span>
        </p>
      </div>
    </div>
  );
}
