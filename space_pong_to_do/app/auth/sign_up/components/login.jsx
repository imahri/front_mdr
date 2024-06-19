"use client"
import TopLogin from "../../tools/login_top"
import SignUp from "../../tools/sign_up"
import style from "../../tools/login.module.css"


const Start = () => {
    return <div className={style.container}>
        <div className={style.card}>
            <TopLogin />
            <SignUp />
            
        </div>
    </div>;
}

export default Start;



