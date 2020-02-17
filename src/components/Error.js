import React from "react";

export function Error({ children, name }) {
  return (
    <p className="error" id={`${name}Error`}>
      {children}
    </p>
  );
}
