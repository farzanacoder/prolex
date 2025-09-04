import React from "react";

export default function SpecItem({icon , text , subtext}) {
  return (
    <div className="flex pr-14 col flex-col gap-2">
        {icon}
      <h3 className="text-gray-800 font-semibold text-xl">{text}</h3>
      <p className="text-gray-600 font-normal text-base">
        {subtext}
      </p>
    </div>
  );
}
