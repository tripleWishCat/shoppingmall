import axios, { AxiosResponse } from "axios";
import { List } from "immutable";
import storage from "lib/Storage";

const restApi = process.env.REACT_APP_REST_API!;

// export const checkEmailExists = (email: string) => {
//   try {
//     return axios.get(restApi + "/rest/CheckEmail/" + email);
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };
// export const checkUsernameExists = (userid: string) => {
//   try {
//     return axios.get(restApi + "/rest/CheckId/" + userid);
//   } catch (error) {
//     return true;
//   }
// };

interface Iregister {
  email: string;
  password: string;
  userid: string;
}
export const localRegister: ({
  email,
  password,
  userid
}: Iregister) => false | Promise<AxiosResponse<any>> = ({
  email,
  password,
  userid
}: Iregister) => {
    let data = {
      m_email: email,
      m_password: password,
      m_userid: userid
    };
    try {
      return axios.post(restApi + "/register", data);
    } catch (error) {
      return false;
    }
    // try {
    //   return axios.post(restBaseApi + "Member", data);
    // } catch (error) {
    //   console.log(error);
    //   return true;
    // }
  };

export const sendSignupEmail = (email: string) => {
  try {
    return axios.post(
        restApi + "/email/regist",
      { m_email: email } // )
    );
  } catch (error) {
    console.log(error);
    return true;
  }
};

interface Ilogin {
  email: string;
  password: string;
}
export const localLogin: ({
  email,
  password
}: Ilogin) => false | Promise<AxiosResponse<any>> = ({
  email,
  password
}: Ilogin) => {
    let data = {
      password: password,
      username: email
    };
    try {
      return axios.post(restApi + "/authenticate", data);
    } catch (error) {
      return false;
    }
  };

// 변수명은 email 이지만 실제로는 id가 들어가 있음
export const localLoginById: ({
  email,
  password
}: Ilogin) => false | Promise<AxiosResponse<any>> = ({
  email,
  password
}: Ilogin) => {
    let data = {
      password: password,
      username: email
    };
    try {
      return axios.post(restApi + "/authenticateById", data);
    } catch (error) {
      return false;
    }
  };



/*
★☆★☆ localLogin 과 호출하는 API가 똑같음. 무슨용도인지 확인 바람.
*/

export const checkStatus = (data: { email: string; password: string }) => {
  try {
    return axios.post(restApi + "/authenticate", {
      password: data.password,
      username: data.email
    });
  } catch (error) {
    return true;
  }
};

export const googleLogin = (id_token: string) => {
  try {
    return axios.post(restApi + "/loginByGoogle", id_token);
  } catch (error) {
    return true;
  }
};

// /*
//     ☆★☆★ 구현 필요
// */
// export const logout = () => {
//   try {
//     const token = "Bearer " + storage.get("token"); // 로그아웃을 위한 사용자 token
//     return axios.post("/api/auth/logout", {headers : { Authorization : token }});
//   } catch (error) {
//     return true;
//   }
// };

export const emailValidate = (email: string, key: string) => {
  try {
    return axios.get(
        restApi + "/email/enter?m_email=" + email + "&m_key=" + key
    );
  } catch (error) {
    return error;
  }
};

// 비밀번호 찾기 메일 전송
export const changePasswordEmailSend = async (email: string) => {
  let response = await axios.post(restApi + "/email/change", {
    m_email: email
  });
  return response.data;
};

// 비밀번호 변경
export const changePassword = async (
  passwordToken: string,
  password: string
) => {
  let data = { token: passwordToken, password: password };
  let response = await axios.post(restApi + "/email/password", data);
  return response.data;
};
