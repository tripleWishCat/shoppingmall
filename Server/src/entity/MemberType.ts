interface MemberType {
  user_id: string,
  pwd: string,
  user_name: string,
  salt?: string,
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
  point?: string 
}

export default MemberType;