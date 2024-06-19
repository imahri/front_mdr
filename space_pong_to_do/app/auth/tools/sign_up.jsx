"use client"

import style from "./login.module.css"
import Choice from "./change"
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";


const SignUp = () => {
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
            <div className={style.holders}>
                <MdOutlineLock size={25} color="rgba(0, 0, 0, 0.6)"/>
                <input className={style.email} placeholder="Confirm your password" type="password" />
            </div>
            <div className={`${style.holders} ${style.signup} `}>
                Sing up
            </div>
        </div>
            <div className={`${style.change} `}>
                <p>Already have an account? </p>
                <Link href="/auth/sign_in">
                    <div className={`${style.both_l}`}>
                        <span className={`${style.Singin}`}>Sign in</span><FaLongArrowAltRight  color="white"/>
                    </div>
                </Link>
            </div>
            <Choice />
    </div>
}

export default SignUp;
