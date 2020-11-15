// TODO : sigin in , sign up 용 따로 만들기
interface MemberType {
  user_id: string,
  pwd: string,
  user_name?: string,
  post_num?: string,
  address_b?: string,
  addrress_d?: string,
  phone_num?: string,
  h_phone_num?: string,
  email?: string,
  birth_ymd?: string,
  group?: string,
  human_yn?: string,
  delete_yn?: string,
  reg_date?: Date,
  reg_id?: string,
  chg_date?: Date,
  chg_id?: string,
  rec_id?: string,
  grade?: string,
  point?: string,
  ad?: string
}

interface changingSecretBodyType {
  old_pwd: string,
  new_pwd: string
}

interface userInfoType {
  user_id: string,
  user_name: string
}

export { MemberType, changingSecretBodyType, userInfoType};