import React from "react";

const NotFound = () => {
  const myStyle = {
    color: "red",
    padding: "10px",
    margin: "50px",
    textAlign: "center",
  };
  return (
    <div style={myStyle}>
      <h1>Page Not Found</h1>
      <h2>404 Error !!!</h2>
    </div>
  );
};

export default NotFound;
