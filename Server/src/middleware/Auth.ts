import bkfd2Password from 'pbkdf2-password'
import path from 'path'

const hasher = bkfd2Password()

export const createPassword = (password:string) => {
    hasher({ password }, function(err:Error, salt:string, hash:string) {
      if (err) throw err;
      return { hash: hash, salt: salt }
    })
}
