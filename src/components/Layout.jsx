import React from "react";
import { Outlet } from "react-router-dom";
import { useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

export default function Layout() {
  const initialState = createContext({ name: "stevens" });
  return (
    <main className="grid h-screen w-full">
      <Outlet />
    </main>
  );
}
