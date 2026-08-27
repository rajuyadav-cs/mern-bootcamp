import React from "react";
import messageResponseType from "@/types/message.type";
import getMessage from "@/services/message.service";
export default async function Home() {
  const response: messageResponseType = await getMessage();
  console.log(response);

  return (
    <div className="min-h-screen flex flex-col  items-center p-10 gap-10 bg-slate-900">
      <div className="inputsection text-center text-5xl text-blue-200">
        {response.message}
      </div>
      <div className="text-center text-7xl text-slate-300">Message Section</div>
    </div>
  );
}
