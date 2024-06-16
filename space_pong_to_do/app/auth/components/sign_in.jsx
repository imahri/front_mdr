"use client"

import style from "./login.module.css"
import Choice from "./change"
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";


const SignIn = () => {
    return <div className={`${style.layer} ${style.inputs}`}>

        <div className={style.fields}>
            <div className={style.holders}>
                <MdOutlineMail size={25} color="rgba(0, 0, 0, 0.6)"/>
                <input className={style.email} placeholder="Email" type="text" />
            </div>
            <div className={style.holders}>
                <MdOutlineLock size={25} color="rgba(0, 0, 0, 0.6)"/>
                <input className={style.email} placeholder="Password" type="password" />
            </div>
            <div className={`${style.holders} ${style.signup} `}>
                Sing in
            </div>
        </div>
            <div className={`${style.change_in} `}>
                <p>Forgot password?</p>
            </div>
            <Choice />
            <div className={`${style.change} `}>
                <p>Don’t have an account? </p>
                <div className={`${style.both_l}`}>
                    <span className={`${style.Singin}`}>Sign up</span>
                </div>
            </div>
    </div>
}

export default SignIn;
