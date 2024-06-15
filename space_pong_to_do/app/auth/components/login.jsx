"use client"
import TopLogin from "./login_top"
import SignUp from "./sign_up"
import style from "./login.module.css"

import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Start = () => {
    return <div className={style.container}>
        <div className={style.card}>
            <TopLogin />
            <SignUp />
           
        </div>
    </div>;
}

export default Start;
