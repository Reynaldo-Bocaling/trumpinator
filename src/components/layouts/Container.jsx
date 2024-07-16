import React from "react";

const Container = ({ children, variant }) => {
  return <div className={`${variant} max-w-7xl mx-auto p-5`}>{children}</div>;
};

export default Container;
