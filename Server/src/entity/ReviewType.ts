interface ReviewType {
  re_id:number,
  prod_id:number,
  img?: string,
  content?: string,
  hits?: number,
  rate?: number,
  share?: boolean,
  delete_yn?: boolean,
  user_id: string,
  reg_date?: Date,
  chg_date?: Date
}

interface CommentType {
  co_id: string,
  re_id: string,
  comment: string,
  delete_yn?: boolean,
  user_id: string,
  reg_date?: Date,
  chg_date?: Date
}

interface ReviewLikeType {
  user_id: string,
  re_id:string,
  delete_yn?: boolean,
  reg_date?: Date,
  chg_date?: Date
}

export { ReviewType, CommentType, ReviewLikeType };