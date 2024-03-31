/** @format */

import React from "react";
import "./button.css";

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary" | "red" | "black" | "gray";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant = "filled", color = "primary", size = "md", children, disabled = false, ...props }: ButtonProps) => {
  const baseStyles = "rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  };

  const colorStyles = {
    primary: {
      filled: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400",
      outlined: "bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400",
    },
    secondary: {
      filled: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400",
      outlined: "bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400",
    },
    red: {
      filled: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
      outlined: "bg-transparent hover:bg-red-100 text-red-500 border-red-500 border focus:ring-red-400",
    },
    black: {
      filled: "bg-black hover:bg-black text-white focus:ring-black",
      outlined: "bg-transparent hover:bg-gray-100 text-black border-black border focus:ring-gray-100",
    },
    gray: {
      filled: "bg-black hover:bg-black text-white focus:ring-black",
      outlined: "bg-transparent text-gray-400 border border-gray-400 hover:bg-gray-100 focus:ring-gray-100",
    },
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};
