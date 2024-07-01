import React from "react";
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

export default function SidebarHeader() {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym />
      <h2 className="font-extrabold text-primary text-xl">PersonalGPT</h2>
      <ThemeToggle />
    </div>
  );
}
