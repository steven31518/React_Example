import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useMember } from "../hook/useMember";
import api from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function Layout() {

  const { member, dispatch } = useMember();

  const { isError, isPending, isSuccess, data, error } = useQuery({
    queryKey: ["GetDeptEmp"],
    queryFn: async () =>
      api.getEmpData({
        DeptId: "", //部門代號
        EmpId: "", //工號
        Company: "", //公司
      }),
    select: (data) => data.filter((emp) => emp.EmpId === "222008"),
  }); //GET

  //POST PUT DELETE

  if (isPending) return <div>Loading</div>;

  if (isError) return <div>{error.message}</div>;

  if (isSuccess)
    return (
      <main className="grid h-screen w-full">
        <h1>{data[0]?.EmpName}</h1>
        <h1>{account}</h1>
        <Outlet />
      </main>
    );
}
