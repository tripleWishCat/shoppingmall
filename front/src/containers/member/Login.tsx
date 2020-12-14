import React, { useReducer, useEffect, useState } from "react";
import { loginApi } from "api/Auth";
import Input from "components/forms/Input";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";

const Login: React.FC = () => {
  const [state, setState] = useState({
    userid: "",
    password: "",
    userName: "",
  });
  const sendJoin = () => {
    try {
      loginApi({
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
      <BasicButton message="Login" onClick={sendJoin} color="primary" />
    </JoinContainer>
  );
};
export default Login;

const JoinContainer = styled.div`
  margin: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       width: 400,
//       margin: `${theme.spacing(0)} auto`,
//     },
//     loginBtn: {
//       marginTop: theme.spacing(2),
//       flexGrow: 1,
//     },
//     header: {
//       textAlign: "center",
//       background: "#212121",
//       color: "#fff",
//     },
//     card: {
//       marginTop: theme.spacing(10),
//     },
//   })
// );

// type State = {
//   username: string;
//   password: string;
//   isButtonDisabled: boolean;
//   helperText: string;
//   isError: boolean;
// };

// const initialState: State = {
//   username: "",
//   password: "",
//   isButtonDisabled: true,
//   helperText: "",
//   isError: false,
// };

// type Action =
//   | { type: "setUsername"; payload: string }
//   | { type: "setPassword"; payload: string }
//   | { type: "setIsButtonDisabled"; payload: boolean }
//   | { type: "loginSuccess"; payload: string }
//   | { type: "loginFailed"; payload: string }
//   | { type: "setIsError"; payload: boolean };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "setUsername":
//       return {
//         ...state,
//         username: action.payload,
//       };
//     case "setPassword":
//       return {
//         ...state,
//         password: action.payload,
//       };
//     case "setIsButtonDisabled":
//       return {
//         ...state,
//         isButtonDisabled: action.payload,
//       };
//     case "loginSuccess":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false,
//       };
//     case "loginFailed":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true,
//       };
//     case "setIsError":
//       return {
//         ...state,
//         isError: action.payload,
//       };
//   }
// };

// const Login = () => {
//   const classes = useStyles();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.username.trim() && state.password.trim()) {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: false,
//       });
//     } else {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: true,
//       });
//     }
//   }, [state.username, state.password]);

//   const handleLogin = () => {
//     // 테스트용
//     // api와 연결 필요
//     if (state.username === "abc@email.com" && state.password === "password") {
//       dispatch({
//         type: "loginSuccess",
//         payload: "Login Successfully",
//       });
//     } else {
//       dispatch({
//         type: "loginFailed",
//         payload: "Incorrect username or password",
//       });
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.keyCode === 13 || event.which === 13) {
//       state.isButtonDisabled || handleLogin();
//     }
//   };

//   const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setUsername",
//       payload: event.target.value,
//     });
//   };

//   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setPassword",
//       payload: event.target.value,
//     });
//   };
//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <Card className={classes.card}>
//         <CardHeader className={classes.header} title="Login" />
//         <CardContent>
//           <div>
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="username"
//               type="email"
//               label="Username"
//               placeholder="Username"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="password"
//               type="password"
//               label="Password"
//               placeholder="Password"
//               margin="normal"
//               helperText={state.helperText}
//               onChange={handlePasswordChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>
//         </CardContent>
//         <CardActions>
//           <Button
//             variant="contained"
//             size="large"
//             color="secondary"
//             className={classes.loginBtn}
//             onClick={handleLogin}
//             disabled={state.isButtonDisabled}
//           >
//             Login
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// };

// export default Login;
