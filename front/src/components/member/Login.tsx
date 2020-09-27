import * as React from "react";
import styled from "styled-components";
export interface ILoginProps {}

export interface ILoginState {}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <div>로그인</div>
      </div>
    );
  }
}
