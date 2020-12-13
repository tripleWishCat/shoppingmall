import * as React from "react";
import Input from "components/forms/Input";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";
export interface IMember {
  user_id: string;
  pwd: string;
  user_name: string;
}

export default class Join extends React.Component<IMember> {
  public render() {
    return (
      <div>
        <Input placeholder="id"></Input>
        <Input placeholder="pw"></Input>
        <BasicButton message="Join"></BasicButton>
      </div>
    );
  }
}
