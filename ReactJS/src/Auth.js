import React, { useState } from 'react';

export default function Auth() {

  const [auth, setAuth] = useState({
    login: true
  })

  const switchAuth = () => {
    const authShow = auth.login
    setAuth({
      login: !authShow
    })
  }

  let signup = null
  let login = null

  if (auth.login === true) {
    login = (
      <div>
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">Login</button>
        <button onClick={switchAuth}>Signup</button>
      </div>
    )
  } else {
    signup = (
      <div>
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">Signup</button>
        <button onClick={switchAuth}>login</button>
      </div>
    )
  }

  return (
    <div>
      {login}
      {signup}

    </div>
  )
}