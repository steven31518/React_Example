import React, { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function OriginForm() {
  const [formData, setFormData] = useState({});
  const [emp] = useOutletContext();

  const companyOption = useMemo(() => {
    const set = new Set();
    return emp
      .map((item) => ({
        value: item.ResourcesId,
        label: item.ResourcesName,
      }))
      .filter((item) => (!set.has(item.value) ? set.add(item.value) : false));
  }, [emp]);

  const empOption = useMemo(() => {
    return emp
      .filter((item) => item.ResourcesId === formData["company"])
      .map((item) => ({
        value: item.EmpId,
        label: item.EmpName,
      }));
  }, [emp, formData["company"]]);

  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", formData);
  }

  return (
    <form>
      <label htmlFor="company">公司別</label>
      <select
        name="company"
        id="company"
        style={{
          left: "1424px",
          top: "190px",
          width: "200px",
          height: "40px",
          color: "rgba(187, 187, 187, 1)",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "Roboto",
          border: "1px solid rgba(187, 187, 187, 1)",
        }}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        value={formData["company"]}
      >
        <option value="">請選公司別</option>
        {companyOption.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <label htmlFor="empId">人員</label>
      <select
        name="empId"
        id="empId"
        style={{
          left: "1424px",
          top: "190px",
          width: "200px",
          height: "40px",
          color: "rgba(187, 187, 187, 1)",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "Roboto",
          border: "1px solid rgba(187, 187, 187, 1)",
        }}
        onChange={(e) => setFormData({ ...formData, empId: e.target.value })}
        value={formData["empId"]}
      >
        {!!formData.company &&
          empOption.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      <label htmlFor="comment">請輸入留言</label>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        style={{
          left: "1424px",
          top: "190px",
          width: "200px",
          height: "40px",
          color: "rgba(187, 187, 187, 1)",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "Roboto",
          border: "1px solid rgba(187, 187, 187, 1)",
        }}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        value={formData["comment"]}
      ></textarea>
      <button onClick={(e) => handleSubmit(e)} type={"button"}>
        送出
      </button>
    </form>
  );
}
