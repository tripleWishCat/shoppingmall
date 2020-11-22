import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterTop>
          <FooterInner>
            <FooterContent>
              <CScenter>
                <h4>CS CENTER</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  temporibus magni sint obcaecati, incidunt magnam, nisi
                  facilis, odio minima soluta nobis aspernatur. Minima
                  temporibus labore unde a deleniti non reprehenderit.
                </p>
              </CScenter>
              <Notice>
                <h4>NOTICE</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates accusantium, voluptas, quisquam natus commodi illo
                  iusto sed possimus praesentium consequatur necessitatibus,
                  delectus omnis sequi! Dignissimos fugiat cumque a mollitia
                  corrupti?
                </p>
              </Notice>
              <BankInfo>
                <h4>BANK INFO</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum tempora, iure quibusdam illum temporibus nobis.
                  Placeat quo laudantium necessitatibus, ea, dicta facere labore
                  dolorem quae incidunt quisquam accusantium. Accusantium,
                  autem.
                </p>
              </BankInfo>
            </FooterContent>
          </FooterInner>
        </FooterTop>

        <FooterBottom>
          <FooterInner>
            <FooterLogo>
              <LogoImg
                src={require("assets/images/logo_footer.png")}
                alt="footer_img"
              />
            </FooterLogo>
            <FooterMenu>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </FooterMenu>
            <FooterInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam eveniet eum, iusto quibusdam vel aspernatur et
              quasi incidunt! Totam ipsam maiores eum explicabo quae deleniti.
              Nisi cumque fugiat illo.
            </FooterInfo>
          </FooterInner>
        </FooterBottom>
      </FooterWrapper>
    );
  }
}
const FooterWrapper = styled.div`
  /* shape */
  height: 30vh;
  width: 100%;
  color: black;
  background-color: white;

  /* position */
  bottom: 0;
  position: relative;

  /* 임시 center alignment */
  display: grid;
  place-items: center;
`;

// Footer Top
const FooterTop = styled.div`
  width: 100%;
  position: relative;
  padding: 40px 0;
  border-top: 1px solid #eeeeee;
  line-height: 2;
`;
const CScenter = styled.li`
  width: 30%;
  display: block;
  padding-right: 0;
`;
const Notice = styled.li`
  width: 30%;
  padding-right: 0;
  display: block;
`;

const BankInfo = styled.li`
  width: 25%;
  padding-right: 0;
  display: block;
`;

const FooterInner = styled.div`
  position: relative;
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const FooterContent = styled.ul`
  display: flex;
`;

// Footer bottom
const FooterBottom = styled.div`
  position: relative;
  width: 100%;
  padding: 50px 0;
  background: #f5f5f5;
`;
const FooterLogo = styled.div`
  position: absolute;
  left: 0;
  top: 15px;
`;
const LogoImg = styled.img`
  width: 55px;
`;
const FooterMenu = styled.div`
  position: relative;
  margin: 0 0 0 110px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
`;
const FooterInfo = styled.div`
  position: relative;
  margin: 20px 0 0 110px;
  overflow: hidden;
`;
