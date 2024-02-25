import { FieldsetHTMLAttributes, InputHTMLAttributes } from "react";
import "./styles.css";

interface IInput extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label?: string;
  name?: string;
  error?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
export default function Input({
  name,
  label,
  inputProps,
  error,
  ...props
}: Readonly<IInput>) {
  return (
    <fieldset className={`container ${props.className}`} {...props}>
      <span className={`label_input_container`}>
        <label htmlFor={name}>{label}</label>
        <input name={name} {...inputProps} />
      </span>
      {error && <p className="error">{error}</p>}
    </fieldset>
  );
}
