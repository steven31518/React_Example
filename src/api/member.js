import axios from "axios";

function getEmpData(apiPath) {
  return async (data) => {
    try {
      const response = await axios({
        url: `${apiPath}GetDeptEmp`,
        data: data,
        method: "POST",
      });
      return response.data;
    } catch (error) {
      console.log(error.message);

      return error.message;
    }
  };
}

function getGroupData(apiPath) {
  return async (data) => {
    try {
      const response = await axios({
        url: "/GetEmpGroup",
        data: data,
        method: "POST",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("發生未知的錯誤");
    }
  };
}

export { getEmpData, getGroupData };
