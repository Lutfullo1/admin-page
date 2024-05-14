import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, className }) => {
  return (
    <button
      onClick={onClick}
      type={[type]}
      className={clsx(
        "rounded-md p-2 text-white",
        {
          "bg-blue-400": variant === "blue",
          "bg-red-400": variant === "red",
        },
        className
      )}
    >
      {children}
    </button>
  );
};
