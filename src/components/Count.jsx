import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Count = () => {
  const [number, setNumber] = useState(0);
  const [emp, setEmp] = useState([]);

  async function getEmpData() {
    const response = await axios({
      url: "https://orangeapi.orange-electronic.com/api/GetDeptEmp",
      method: "POST",
      data: {
        DeptId: "", //部門代號
        EmpId: "224005", //工號
        Company: "", //公司
      },
    });
    // {
    //     DeptId: '1100',
    //     DeptName: '總經理室',
    //     DeptName_E: 'CEO Office',
    //     EmpId: '224005',
    //     EmpName: '楊立瑜',
    //     ResourcesId: 'Orange',
    //     ResourcesName: '台灣總公司',
    //     ResourcesName_E: 'Orange-TW',
    //     Compose: '台灣總公司,1100,224005,楊立瑜',
    //     FullName: 'Li.Yu / 楊立瑜',
    //     Title: '03-工程師',
    //     Language: 'zh-TW',
    //     Email: 'li.yu@orange-electronic.com',
    //     type: '0'
    //     message:"sdsgfdg"
    //   }
    const [data] = response.data; //
    const { EmpName } = data;
    setEmp(EmpName);
  }

  function increase() {
    setNumber((prv) => prv + 1);
  }
  function decrease() {
    setNumber((prv) => prv - 1);
  }

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <div className="card">
      <div className="">{JSON.stringify(emp)}</div>
      <p>{emp}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};
export default Count;
