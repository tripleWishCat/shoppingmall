import bkfd2Password from 'pbkdf2-password'

const hasher = bkfd2Password()

export function createPassword(password:string):Promise<any> {
    return new Promise((resolve, reject) => 
      hasher({ password }, function(err:Error, salt:string, hash:string) {
        if (err) reject(err)
        resolve ({salt, hash})
      })
)}

// export function createPassword(password:string):Promise<Object|Error> {
//   return hasher({ password }, function(err:Error, salt:string, hash:string) {
//       if (err) return err
//       else return {salt, hash}
//     })
// }


