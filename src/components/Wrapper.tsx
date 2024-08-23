import React from "react";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, className } = props;
  return <div className={`p-10 ${className}`}>{children}</div>;
};

export default Wrapper;
