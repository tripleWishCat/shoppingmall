// action의 type의 type
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// authReducer의 initialState type
export interface IAuthState {
  isSignUpPopUpShow: boolean;
  isSignInPopUpShow: boolean;
  loggedInUser: user;
}

export interface user {
  id: string;
  seq: number;
  type: string;
}

interface logInAction {
  type: typeof LOGIN;
  user: user;
}

interface logOutAction {
  type: typeof LOGOUT;
}

export type AuthActionType = logOutAction | logInAction;
