import bkfd2Password from 'pbkdf2-password'
import jwt from 'jsonwebtoken'
import { MemberType, userInfoType } from '../entity'

const hasher = bkfd2Password()
const salt = process.env.SALT
const jwtSecret = process.env.JWT_SECRET


export function createPassword(password:string):Promise<any> {
    return new Promise((resolve, reject) => 
      hasher({ password, salt }, function(err:Error, pass:string, salt1:string, hash:string) {
        if (err) reject(err)
        resolve (hash)
      })
)}

export function compareHash(hash1:string, hash2:string) {
  let answer = true;
  for (let i = 0; i < hash1.length; i++) {
    if (hash1[i] !== hash2[i]) answer = false
  }
  return answer
}

export function createJwt(member:MemberType): any {
  if (!jwtSecret) throw Error('Check JWT Secret. It is undefined.')
  const { user_id, user_name } = member
  const payload = { user_id, user_name }
  const options = {
    expiresIn: '1d',
    issuer: 'shoppingmall',
    subject: 'userInfo'
  }
  return jwt.sign(payload, jwtSecret, options)
}

export function checkJwt(request: any, response: any, next?: (err?: any) => any): any {
  try {
    const token = request.headers['x-access-token']
    if (!jwtSecret) throw Error('Check JWT Secret. It is undefined.')
    if (!token) return response.status(403).json({success: false, message: 'JWT is not provided'})
    
    const decoded = jwt.verify(token, jwtSecret)
    if (typeof decoded === 'string') return response.status(403).json({success: false, message: 'JWT was not processed well.'})
    request.headers.userInfo = decoded
    
    if (next) next();

  } catch (err) {
    throw Error('error happened during checking JWT')
  }  
}

export async function checkIdentity(request: any, response: any, next?: (err?: any) => any): Promise<any> {
  try {
    const { userInfo } = request.headers
    const id = request.params.id
    if (id !== userInfo.user_id) return response.status(403).json({success: false, message: 'User does not have the authority to this request.'})
    if (next) next()
  } catch (err) {
    throw Error('error happened during checking user identity')
  }
}


