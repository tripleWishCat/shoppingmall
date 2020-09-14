import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterWrapper>Footer</FooterWrapper>;
}

export default Footer;

const FooterWrapper = styled.div`
  height: 30vh;
  width: 100vw;
  background-color: grey;
  color: white;
  position: relative;
  bottom: 0;
`;
