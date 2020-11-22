import React from "react";
import { Input } from "@material-ui/core";

interface Props {
  // autoComplete:string;
  // autoFocus:boolean;
  color?: any;
  placeholder?: string;
  required?: boolean;
  onChange?: () => void;
  value?: string;
}

const InputForm: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Input
        color={props.color ? props.color : "default"}
        required={props.required ? props.required : false}
        placeholder={props.placeholder ? props.placeholder : ""}
        value={props.value ? props.value : ""}
      ></Input>
    </>
  );
};

export default InputForm;
