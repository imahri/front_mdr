"use client"
import TopLogin from "../../tools/login_top"
import SignIn from "../../tools/sign_in"
import style from "../../tools/login.module.css"

const Start = () => {
    return <div className={style.container}>
        <div className={style.card}>
            <TopLogin />
            <SignIn />
            
        </div>
    </div>;
}

export default Start;
