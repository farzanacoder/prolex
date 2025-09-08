import React from "react";

export default function SpecItem({icon , text , subtext}) {
  return (
    <div className="flex pr-2 lg:pr-14 flex-col gap-2">
        {icon}
      <h3 className="text-gray-800 font-semibold text-lg lg:text-xl">{text}</h3>
      <p className="text-gray-600 font-normal text-sm lg:text-base">
        {subtext}
      </p>
    </div>
  );
}
