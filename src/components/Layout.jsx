import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="grid h-screen w-full">
      <Outlet />
    </main>
  );
}
