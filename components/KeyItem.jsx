import React from "react";

export default function KeyItem({title , subtitle , icon}) {
  return (
    <div className="bg-white py-8 px-5 flex flex-col gap-3 h-auto shadow-md rounded-lg hover:bg-secondary transition-all hover:-translate-y-2 group">
      {icon}
      <h3 className="font-[600] group-hover:text-white text-xl text-gray-800">{title}</h3>
      <p className="text-base group-hover:text-white text-gray-700">
            {subtitle}
      </p>
    </div>
  );
}
