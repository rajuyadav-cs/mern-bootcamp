"use client";
import { useState } from "react";
import FixedNavbar from "@/components/FixedNavbar";
import Sidebar from "@/components/Sidebar";

export default function Navbar() {
  return (
    <div>
      <div className="hidden md:block">
        <FixedNavbar />
      </div>
      <div className="block md:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
