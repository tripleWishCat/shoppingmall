import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

interface Props {
  message: string;
  disabled?: boolean;
  action?: () => void;
  width?: number;
  height?: number;
}

export default function DefaultButton({
  message,
  disabled,
  action,
  width,
  height,
}: Props) {
  return <Button color="primary">{message}</Button>;
}
