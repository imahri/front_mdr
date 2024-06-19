"use client"
import style from "./login.module.css"
import Image from "next/image";
import li from "../../picture/fline.png"
import logo from "../../picture/logo.png"
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Link from "next/link";

const TopLogin = () => {
    return <div className={`${style.layer} ${style.container_logo}`}>
            <Link href="/welcom"><IoIosArrowDropleftCircle className={style.closed} size={35}/></Link>
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