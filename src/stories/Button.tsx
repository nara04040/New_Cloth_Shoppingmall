/** @format */

import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  outline?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, outline = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const sizeClasses = {
    small: "text-xs px-4 py-2",
    medium: "text-sm px-5 py-2.5",
    large: "text-lg px-6 py-3",
  };
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const primaryClasses = primary ? "bg-blue-500 text-white" : "bg-transparent text-gray-800 border border-gray-400";

  const outlineClasses = outline ? "border border-black" : "text-gray border border-gray-500";
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      className={`font-bold rounded-full cursor-pointer inline-block leading-none ${sizeClasses[size]} ${primaryClasses} ${outlineClasses}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
