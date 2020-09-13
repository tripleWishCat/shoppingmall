import React, { ReactElement } from "react";
// import Button from "semantic-ui"
interface Props {
  placeholder?: string;
  // disabled : boolean
  action: () => void;
  width?: number;
  height?: number;
}
interface State {}

export default function ActionButton({
  placeholder,
  action,
  width,
  height,
}: Props): ReactElement {
  return (
    <div>
      {/* <button className="my--btn" onClick={action} disabled={disabled}>
      <Button width={width} height={height} color="orange" onClick={action}>
        {placeholder}
      </Button> */}
    </div>
  );
}

