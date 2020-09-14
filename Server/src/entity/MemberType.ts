interface MemberType {
  id: string,
  pwd: string,
  name: string,
  salt?: string,
  postNum?: string,
  addrB?: string,
  addrD?: string,
  phoneNum?: string,
  hPhoneNum?: string,
  email?: string,
  birthYmd?: string,
  group?: string,
  humanYn?: string,
  deleteYn?: string,
  reg_date?: string,
  regId?: string,
  chg_date?: string,
  chgId?: string,
  recId?: string,
  grade?: string,
  point?: string 
}

export default MemberType;