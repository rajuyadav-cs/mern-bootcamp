import api from "@/lib/api";
import messageResponseType from "@/types/message.type";

const getMessage = async (): Promise<messageResponseType> => {
  const url = api("message");

  console.log(url);

  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!data.ok) {
    throw new Error("Data Fetching Failed...");
  }

  return data.json();
};

export default getMessage;
