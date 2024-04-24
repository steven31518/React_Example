import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useMember } from "../hook/useMember";
import api from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function Layout() {
  const { member, dispatch } = useMember();

  const [empId, setEmpId] = useState("222008");

  const { isError, isPending, isSuccess, data, error } = useQuery({
    queryKey: ["GetDeptEmp", empId],
    queryFn: async () =>
      api.getEmpData({
        DeptId: "", //部門代號
        EmpId: empId, //工號
        Company: "", //公司
      }),
  }); //GET

  //POST PUT DELETE
  const {
    mutate,
    isPending: actionIsPending,
    isError: actionIsError,
    isSuccess: actionIsSuccess,
    data: actionData,
    error: actionDataError,
  } = useMutation({
    mutationFn: async (data) => api.getEmpData(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(`成功取得${data[0]?.EmpId}的資料`);
    },
  });

  if (isPending) return <div>Loading</div>;
  if (actionIsPending) return <div>手動資料取得中....</div>;

  if (isError) return <div>{error.message}</div>;
  if (actionDataError) return <div>{actionDataError.message}</div>;

  if (isSuccess || actionIsSuccess)
    return (
      <main className="grid h-screen w-full">
        <>
          <p>這是useMutation觸發的資料</p>
          <div>{actionIsSuccess && actionData[0]?.EmpName}</div>
        </>
        <h1>{data[0]?.EmpName}</h1>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
          }}
          onClick={() =>
            mutate({
              DeptId: "", //部門代號
              EmpId: empId, //工號
              Company: "", //公司
            })
          }
        >
          取得資料
        </button>
        <Outlet />
      </main>
    );
}
