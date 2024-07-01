import React from "react";
import SidebarHeader from "./SidebarHeader";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";

export default function Sidebar() {
  return (
    <div className="bg-base-50 min-w-12 px-4 py-12 text-2xl min-h-full grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
}
