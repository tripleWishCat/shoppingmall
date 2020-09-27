import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Notice extends Component {
  static propTypes = {
    prop: PropTypes,
  };

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
