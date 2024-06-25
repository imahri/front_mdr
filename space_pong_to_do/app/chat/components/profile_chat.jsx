"use client"
import style from "./profile_chat.module.css"
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
                        />
                    </div>
                    <div className={style.pa_holder}>
                        <p className={style.username}>mahri imad-eddine</p>
                    </div>
                </div>
    </div>;
}

export default Search;