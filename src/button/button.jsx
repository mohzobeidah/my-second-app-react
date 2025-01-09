import React from "react";
export default function Button() {
  const [name, setName] = React.useState("");
  return (
    <>
      <p style={{ background: "red" }}>{name}</p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
