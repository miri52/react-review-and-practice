export default function StrongChild(props) {
  const data = "This is data coming from Child to Parent Component";
  return (
    <div style={{ border: "1px dotted green", padding: "0.5em" }}>
      <h2>I am the strong child</h2>
      <button onClick={() => props.childToParent(data)}>Click Child</button>
    </div>
  );
}
