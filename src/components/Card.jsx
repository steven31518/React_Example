import React, { useEffect } from "react";

import { SiBlueprint } from "react-icons/si";
//function scope

const Card = ({ empData }) => {
  //initial state

  return (
    <div className="p-4 border border-slate-400 rounded-md bg-slate-300 h-[400px] shadow-md flex-col space-y-4 text-center">
      <SiBlueprint />

      <h1 className="text-2xl font-semibold me-2">{empData?.FullName}</h1>
      <small>{empData?.ResourcesName}</small>
      <p>{empData?.DeptName}</p>
      <p>{empData?.Title}</p>
      <p>{empData?.Email}</p>
      <button className="bg-blue-500 text-sm text-center p-4 border rounded-lg max-w-sm hover:bg-blue-400">
        詳細資料
      </button>
    </div>
  );
};
export default Card;
