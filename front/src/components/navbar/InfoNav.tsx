import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";
import { Opacity } from "@material-ui/icons";

function InfoNav() {
  return (
    <>
      <InfoBar className="InfoBar">
        <a href="#detail-review">고객리뷰</a>
        <a href="#detail-info">상세정보</a>
        <a href="#detail-product">상품정보</a>
        <a href="#detail-related">연관상품</a>
        <a href="#detail-Qna">Q&A</a>
      </InfoBar>
    </>
  );
}

export default InfoNav;
const InfoBar = styled.div`
  display: block;
  border-bottom: 1px solid #ddd;
  padding: 70px 0 15px;
  margin: 0 0 10px;
  text-decoration: none;
`;
