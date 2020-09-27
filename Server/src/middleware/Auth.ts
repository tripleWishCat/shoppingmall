import bkfd2Password from 'pbkdf2-password'
import assert from 'assert'

const hasher = bkfd2Password()

// TODO : salt 만드는 함수
export function createPassword(password:string, salt?:string):Promise<any> {
    return new Promise((resolve, reject) => 
      hasher({ password, salt }, function(err:Error, pass:string, salt1:string, hash:string) {
        if (err) reject(err)
        resolve ({salt1, hash})
      })
)}

export function compareHash(hash1:string, hash2:string) {
  let answer = true;
  for (let i = 0; i < hash1.length; i++) {
    if (hash1[i] !== hash2[i]) answer = false
  }
  return answer
}

