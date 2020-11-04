import { ThunkAction } from "redux-thunk";
import axios from 'axios'
import {
  SignUpData,
  AuthAction,
  SET_USER,
  User,
  SET_LOADING,
  SET_ERROR,
  SET_SUCCESS,
  NEED_VERIFICATION,
  SignInData,
  SIGN_OUT,
} from "../types";

import { RootState } from "..";
import Axios from "axios";
export const loginUser = (SignUpData:SignUpData) => {
    // const request = axios
    //   .post("http://localhost:3000/api/member/", dataToSubmit, {
    //     withCredentials: true,
    //   })
    // .then((res) => res.data);
    // const request = user.loginUser();
  
    // const data = request("post", USER_URL + "/login", dataToSubmit);
  
    // return {
    //   type: LOGIN_USER,
    //   payload: data,
    // };
  }

const BASE_URL:string = "/api/member";

export const signup = (data: SignUpData, onError:() => void): ThunkAction<void,RootState,null, AuthAction> =>{
    // const name = data.name
    // const id = data.id
    // const password = data.password

    const postBody = {
        'user_name':data.name,
        'user_id':data.id,
        'pwd':data.password
    }

    return async dispatch => {
        try{
            const res = await axios.post('rest api server', postBody)
        }
    }
}