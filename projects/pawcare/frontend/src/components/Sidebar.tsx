"use client";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
type props = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};
function SideLayout({ value, setValue }: props) {
  return (
    <div className="absolute top-0 right-0 flex flex-col gap-6 w-64 px-4 py-2 border h-screen">
      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        <PanelRightOpen />
      </button>
      <div className="flex flex-col overflow-y-auto items-center gap-4">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Contact</Link>
        <Link href={"#"}>About</Link>
      </div>
    </div>
  );
}
export default function Sidebar() {
  const [value, setValue] = useState<boolean>(false);
  return (
    <div className="flex justify-between px-4 py-2 mx-4">
      <div>Pawcare</div>
      <div>
        {value ? (
          <SideLayout value={value} setValue={setValue} />
        ) : (
          <button onClick={() => setValue(true)}>
            <PanelLeftOpen />
          </button>
        )}
      </div>
    </div>
  );
}
