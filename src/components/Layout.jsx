import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <section>
      <div>這是Nav</div>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  );
}
