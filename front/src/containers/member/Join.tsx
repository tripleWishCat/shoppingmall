import React, { useState } from "react";
import { joinApi } from "api/Auth";
import Input from "components/forms/Input";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";

const Join: React.FC = () => {
  const [state, setState] = useState({
    userid: "",
    password: "",
    password2: "",
    userName: "",
  });
  const sendJoin = () => {
    try {
      joinApi({
        user_id: state.userid,
        user_name: state.userName,
        pwd: state.password,
      }).then((res: any) => {
        console.log(res);
      });
    } catch (err) {
      console.log("err:" + err);
    }
  };
  return (
    <JoinContainer>
      <Input
        placeholder="id"
        name="userid"
        value={state.userid}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, userid: e.target.value });
        }}
      />
      <Input
        placeholder="userName"
        name="userName"
        value={state.userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, userName: e.target.value });
        }}
      />
      <Input
        placeholder="password"
        name="password"
        value={state.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, password: e.target.value });
        }}
      />
      <Input
        placeholder="password confirm"
        name="password2"
        value={state.password2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, password2: e.target.value });
        }}
      />
      <BasicButton message="Join" onClick={sendJoin} color="primary" />
    </JoinContainer>
  );
};
export default Join;

const JoinContainer = styled.div`
  margin: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
