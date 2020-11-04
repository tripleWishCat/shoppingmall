import React, { Component } from "react";
import styled from "styled-components";

export default class Notice extends Component {


  render() {
    return (
      <NoticeWrapper>
        <NoticeContainer>Notice</NoticeContainer>
      </NoticeWrapper>
    );
  }
}

const NoticeWrapper = styled.div``;
const NoticeContainer = styled.div``;
