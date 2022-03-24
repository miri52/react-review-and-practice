import { useState } from "react";
import WeakChild from "./WeakChild";

export default function StrongParent() {
  const [data, setData] = useState("");
  const parentToChild = () => {
    setData("This is data coming from Parent to Child Component");
  };
  return (
    <div>
      <h2>I am the strong parent</h2>
      <button onClick={() => parentToChild()}>Click Parent</button>
      <WeakChild parentToChildData={data} />
    </div>
  );
}
