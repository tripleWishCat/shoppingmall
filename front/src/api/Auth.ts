import axios from "axios";

const baseurl = process.env.REACT_APP_REST;
export interface IMember {
  user_id: string;
  pwd: string;
  user_name: string;
}

export const joinApi = function (user: IMember) {
  const data: object = {
    user_id: user.user_id,
    pwd: user.pwd,
    user_name: user.user_name,
  };
  try {
    console.log("회원가입 성공");
    return axios.post(baseurl + "member/new", data);
  } catch (err) {
    console.log("회원가입 실패");
    return err;
  }
};

export const loginApi = function (user: IMember) {
  const data: object = {
    user_id: user.user_id,
    user_name: user.user_name,
    pwd: user.pwd,
  };
  try {
    console.log("login 성공");
    return axios.post(baseurl + "member", data);
  } catch (err) {
    console.log("로그인 실패");
    return err;
  }
};

export const getMemberInfoApi = function (user: IMember) {
  try {
    return axios.get(baseurl + "member/" + user.user_id);
  } catch (err) {
    console.log("정보요청 실패");
    return err;
  }
};

// export const logout = function (user: IMember) {};
