import React from "react";

interface IButtonProps {
  text: string;
  action?: () => void;
  
}

export const ExtendedButton: React.FC<IButtonProps> = ({ text, action }) => {
  return <button></button>;
};
