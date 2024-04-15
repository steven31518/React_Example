import React from "react";
import Wrap from "../components/Wrap";
import Son from "../components/Son";

export default function ExamplePage() {
  const text = "props進去的資料";
  return (
    <div>
      <Wrap>
        <Son text={text}></Son>
      </Wrap>
    </div>
  );
}
