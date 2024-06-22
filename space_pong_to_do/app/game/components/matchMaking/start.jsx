"use client"
import style from "./start.module.css"
import Link from "next/link";
import Image from "next/image";
import BoardMain from "../../../picture/pic1.jpeg"

const Start = () => {
    return <div className={style.container}>
        <div className={style.main_borad}>
            <Image
                src={BoardMain}
                width={1000}
                height={1000}
                alt="boad Main"
                className={style.Board_Main}
            />
            <div className={`${style.paddle} ${style.First}`}></div>
            <div className={`${style.paddle} ${style.Second}`}></div>
            <div className={style.Starter}>
                <p>Start</p>
            </div>
            <div className={style.overlay}></div>
        </div>
        <div className={style.title}>select table</div>
        <div className={style.choice_board}>
            <div className={style.holder_on}>
                        <div className={`${style.box} ${style.pi1}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi2}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi3}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi4}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi5}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi6}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi7}`}>
                            <div className={style.overlay}></div>
                        </div>
                        <div className={`${style.box} ${style.pi8}`}>
                            <div className={style.overlay}></div>
                        </div>
                    </div>
        </div>
    </div>;
        

}

export default Start;

