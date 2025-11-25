"use client";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import React from "react";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-slate-950 min-h-screen w-full overflow-hidden">
      {/* SIDEBAR FIXED */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* CONTENT AREA — hanya bagian ini yang scroll */}
      <div className="flex-1 h-screen overflow-y-auto">
        {children &&
          React.cloneElement(children, {
            isSidebarOpen,
            setSidebarOpen,
          })}
      </div>
    </div>
  );
}
