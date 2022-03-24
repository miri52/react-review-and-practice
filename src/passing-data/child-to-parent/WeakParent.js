import { useState } from "react";
import StrongChild from "./StrongChild";

export default function WeakParent() {
  const [data, setData] = useState("");
  const childToParent = (childData) => {
    setData(childData);
  };
  return (
    <div>
      <p>I am the weak parent</p>
      <p style={{ fontWeight: "600", color: "red" }}>{data}</p>
      <StrongChild childToParent={childToParent} />
    </div>
  );
}

// PARENT COMPONENT
// 1. create a childToParent function in the parent that will pass the data from child to parent
// 2. pass the function as a prop to the child
// 3. create empty state for the data in the parent

// CHILD COMPONENT
// 4. receive the childToParent function as props and assign it to an onClick event
// 5. pass the data you want to share with the parent as a parameter to that function

// BACK TO PARENT COMPONENT
// 6. accept the data from the child as a parameter in the childToParent function
// 7. set the data using the useState hook
// 8. render the data variable
