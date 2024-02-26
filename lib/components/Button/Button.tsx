import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: Readonly<IButton>) {
  const { className, ...restProps } = props;

  return (
    <button
      className={`text-white bg-green-500 rounded-xl p-3 ${className} `}
      {...restProps}
    >
      {children}
    </button>
  );
}
