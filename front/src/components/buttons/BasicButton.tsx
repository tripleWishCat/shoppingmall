import React from "react";
import { Button } from "@material-ui/core";

interface Props {
  message: string;
  disabled?: boolean;
  color?: any;
  action?: () => void;
  href?: string;
}

const BasicButton: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Button
        disableRipple={true}
        color={props.color ? props.color : "default"}
        disabled={props.disabled ? props.disabled : false}
        href={props.href ? props.href : ""}
      >
        {props.message}
      </Button>
    </>
  );
};
export default BasicButton;
