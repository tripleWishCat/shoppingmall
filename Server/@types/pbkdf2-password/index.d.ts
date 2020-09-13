
declare module 'pbkdf2-password' {
  function pbkdf2Password () : hasher

  function hasherCallback (
    err: Error,
    pass: string,
    salt: string,
    hash: string
  )

  function hasher(
    opts: {},
    callback: hasherCallback
  )

  export default pbkdf2Password;
}

