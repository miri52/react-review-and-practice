export default function WeakChild(props) {
  return (
    <div style={{ border: "1px dotted green", marginTop: "1em" }}>
      <p>I am the weak child</p>
      <p style={{ fontWeight: "600", color: "blueviolet" }}>
        {props.parentToChildData}
      </p>
    </div>
  );
}
