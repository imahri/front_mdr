"use client"
import style from "./login.module.css"
import Image from "next/image";
import li from "../../picture/fline.png"

const Choice = () => {
    return <div>
            <div className={style.container_logo}>
                <div className={style.line}>
                        <Image
                            src={li}
                            height={100}
                            width={300}
                            className={`${style.im}`}
                            alt="Profile random image"
                        />
                </div>
                <div className={style.inside}>or</div>
                <div className={style.line}>
                        <Image
                            src={li}
                            height={100}
                            width={300}
                            className={`${style.im}`}
                            alt="Profile random image"
                        />
                </div>
            </div>
            <div className={`${style.gof_container}`}>
                <div className={`${style.holders} ${style.google} `}>
                    <div className={`${style.google_logo}`}></div>
                    Continue whit Google
                </div>
                <div className={`${style.holders} ${style.school} `}>
                    <div className={`${style.school_logo}`}></div>
                    Continue whit 42 Intra
                </div>
            </div>
        </div>
}

export default Choice;