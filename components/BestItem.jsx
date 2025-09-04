import React from "react";

export default function BestItem({icon , text , subtext}) {
  return (
    <div className="flex gap-4">
      <div className="">
        <span className="flex items-center justify-center h-16 w-16 rounded-full shadow-md bg-white">
            {icon}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800">
          {text}
        </h3>
        <p className="text-base text-gray-700">
            {subtext}     
       </p>
      </div>
    </div>
  );
}
