import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Wrapper;
