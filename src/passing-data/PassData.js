import StrongParent from "./parent-to-child/StrongParent";
import WeakParent from "./child-to-parent/WeakParent";

export default function PassData() {
  return (
    <div>
      <h1>Data passing between components</h1>
      <div
        style={{
          border: "1px solid black",
          padding: "2em",
        }}
      >
        <p style={{ textDecoration: "underline" }}>
          This is how we pass data from the parent to the child component:
        </p>
        <StrongParent />
      </div>
      <div style={{ border: "1px solid red", padding: "2em" }}>
        <p style={{ textDecoration: "underline" }}>
          This is how we pass data from the child to the parent component:
        </p>
        <WeakParent />
      </div>
    </div>
  );
}
