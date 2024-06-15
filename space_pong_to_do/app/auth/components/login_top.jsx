"use client"
import style from "./login.module.css"
import Image from "next/image";
import li from "../../picture/line2.png"
import logo from "../../picture/logo.png"

const TopLogin = () => {
    return <div className={`${style.layer} ${style.container_logo}`}>
            <div className={style.line}>
                <Image
                    src={li}
                    height={100}
                    width={200}
                    className={`${style.im}`}
                    alt="Profile random image"
                />
            </div>
            <div className={style.logo}>
                <Image
                    src={logo}
                    height={100}
                    width={200}
                    className={`${style.logo_im}`}
                    alt="Profile random image"
                />
            </div>
            <div className={style.line}>
                <Image
                src={li}
                height={100}
                width={200}
                className={`${style.im}`}
                alt="Profile random image"
            />
            </div>
    </div>
}

export default TopLogin;