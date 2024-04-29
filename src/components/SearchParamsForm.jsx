import { useState } from "react";

export default function SearchParamsForm() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="/timer" method="GET">
      <label htmlFor="account">請輸入帳號</label>
      <input
        style={{
          border: "1px solid #000",
          padding: "5px",
          marginRight: "10px",
        }}
        type="text"
        id={`account`}
        name={`account`}
        value={account}
        onChange={(e) => {
          setAccount(e.target.value);
        }}
      ></input>
      <label htmlFor="password">請輸入密碼</label>
      <input
        style={{ border: "1px solid #000", padding: "5px" }}
        type="password"
        id={`password`}
        name={`password`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" className="" style={{ backgroundColor: "#fff990" }}>
        Submit
      </button>
    </form>
  );
}
