"use client"

import Login from "./components/login"
import style from "./auth.module.css"

const Auth = () =>{
  return <div className={style.page}>
    <Login />
  </div>;
}

export default Auth;