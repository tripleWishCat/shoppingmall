import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
// import * as AuthApi from "lib/api/AuthApi";
import validator from "validator";

type joinState = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};
export default class Join extends React.Component<joinState> {
  // validate: validate = {
  //   userid: (value: string) => {
  //     if (
  //       !validator.isAlphanumeric(value) ||
  //       !validator.isLength(value, { min: 4, max: 15 })
  //     ) {
  //       alert("아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.");
  //       return false;
  //     }
  //     return true;
  //   },
  //   password: (value: string) => {
  //     if (!validator.isLength(value, { min: 8 })) {
  //       alert("비밀번호를 8자 이상 입력하세요.");
  //       return false;
  //     }
  //     return true;
  //   },
  // passwordConfirm: (value: string) => {
  //   if (value2 !== value) {
  //     alert("비밀번호확인이 일치하지 않습니다.");
  //     return false;
  //   }
  //   return true;
  // },
  // };

  public render() {
    return (
      <Container>
        <Card>
          <CardHeader title="Join" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="userID"
                type="email"
                label="UserID"
                placeholder="UserID"
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
              />
              <TextField
                fullWidth
                id="password2"
                type="password"
                label="Password2"
                placeholder="Password2"
                margin="normal"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" color="secondary">
              Join
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 50%;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;
