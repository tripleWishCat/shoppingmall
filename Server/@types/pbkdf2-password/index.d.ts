declare module 'pbkdf2-password' {
  function pbkdf2Password () : hasher
  interface cbfn {
    (err: Error, pass: string, salt: string, hash: string) : void
  }
  function hasher(
    opts: {},
    callback: cbfn
  ): cbfn

  export default pbkdf2Password;
}

