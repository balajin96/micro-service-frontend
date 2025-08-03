// This is the component we're exposing to the container
import React from "react";

const Widget = () => {
  return (
    <div style={{ padding: "20px", border: "2px dashed #666", backgroundColor: "#000", borderRadius: "8px" }}>
      <h2>Remote Widget</h2>
      <p>This component is from the <strong>remote-app</strong>!</p>
      <p>Successfully loaded via Module Federation! </p>
    </div>
  );
};

export default Widget;
