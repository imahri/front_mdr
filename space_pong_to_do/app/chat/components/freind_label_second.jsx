"use client"
import style from "./freind_label_second.module.css"
import ProfilePic from "../../picture/imahri.jpeg"
import Image from "next/image"


const Search = () => {
    return <div>
                <div className={style.container}>
                    <div className={style.pi_holder}>
                        <Image
                            src={ProfilePic}
                            height={100}
                            width={300}
                            alt="Profile image"
                            className={style.image_drag}
                        />
                    </div>
                    <div className={style.pa_holder}>
                        <p className={style.username}>imahri</p>
                        <div className={style.lst_msg_holder}>
                            <p className={style.lst_msg}>malk a 5ouna????lajlfjkdlsfahdsfjklaldfdlsfadls</p>
                            <p className={style.lst_msg_time}>1h</p>
                        </div>
                    </div>
                </div>
    </div>;
}

export default Search;