import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface Props {
  message: string;
  disabled?: boolean;
  color?: any;
  onClick?: (e: any) => void;
  href: string;
}

const BasicButton: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Link to={props.href} className="button" onClick={props.onClick}>
        {props.message}
      </Link>
    </>
  );
};
export default BasicButton;
