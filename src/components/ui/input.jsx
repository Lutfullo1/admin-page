import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(
  (
    {
      value,
      name,
      onChange,
      id,
      placeholder,
      type,
      label,
      error,
      helperText,
      variant,
      className,
      ...restProp
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label className="block text-[12px] mb-2" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          {...restProp}
          className={clsx(
            "border px-2 py-1 rounded-md outline-none",
            {
              "text-[12px] bg-gray-100": variant === "standart",
              // "border-2 border-red-500": error == true,
            },
            className
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {helperText && (
          <p className="text-xs text-red-500 w-[250px]">{helperText}</p>
        )}
      </div>
    );
  }
);
