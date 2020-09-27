import * as React from "react";
import styled from "styled-components";
export interface IJoinProps {}

export interface IJoinState {}

export default class Join extends React.Component<IJoinProps, IJoinState> {
  constructor(props: IJoinProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <div>회원가입</div>
      </div>
    );
  }
}
