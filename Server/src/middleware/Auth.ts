import bkfd2Password from 'pbkdf2-password'
import assert from 'assert'

const hasher = bkfd2Password()

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


// export function compareDeeply(password:string) {
//   return new Promise((resolve, reject) => 
//     hasher({ password }, function(err:Error, salt:string, hash:string) {
//       if (err) reject(err)
//       hasher({ password, salt }, function(err:Error, salt2:string, hash2:string) {
//         console.log(salt, salt2)
//         if (err) reject(err)
//         if (hash2 === hash) resolve({salt2, hash})
//         else reject(Error(' does not match'))
//       })  
//   })
// )}

// export function createPassword(password:string):Promise<Object|Error> {
//   return hasher({ password }, function(err:Error, salt:string, hash:string) {
//       if (err) return err
//       else return {salt, hash}
//     })
// }


