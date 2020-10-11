import React from "react";
import styled from "styled-components";
type LinkProps = {
  name: string;
  linkto: string;
  padding?:string;
  margin?:string;
};

function LinkButton({ name, linkto }: LinkProps) {
  return <LinkText href={linkto} >{name}</LinkText>;
}

export default LinkButton;

const LinkText = styled.a`
  display: inline-block;
  padding:0 0.8em 0 0.8em;
`;
