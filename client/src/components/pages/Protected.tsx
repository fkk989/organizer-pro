import React from "react";

export const Protected: React.FC<{ component: React.ReactNode }> = ({
  component,
}) => {
  return <div>{component}</div>;
};
