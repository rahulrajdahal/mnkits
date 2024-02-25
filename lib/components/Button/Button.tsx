import {
  ButtonHTMLAttributes,
  ReactNode
} from "react";
import "./styles.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: Readonly<IButton>) {
  return <button className={`${props.className} container`} {...props}>{children}</button>;
}
