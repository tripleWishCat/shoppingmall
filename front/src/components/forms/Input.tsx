import React from "react";
import { Input } from "@material-ui/core";

interface Props {
  color?: any;
  name?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: any) => void;
  value?: string;
}

const InputForm: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Input
        fullWidth={false}
        required={props.required ? props.required : false}
        placeholder={props.placeholder ? props.placeholder : ""}
        onChange={props.onChange}
        value={props.value}
      ></Input>
    </>
  );
};

export default InputForm;
