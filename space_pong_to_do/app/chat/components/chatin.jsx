"use client"
import style from "./chatin.module.css"
import ProfilePic from "../../picture/imahri.jpeg"
import Image from "next/image"


const ChatIn = () => {
    return <div className={style.container}>
            <div className={style.pi_holder}>
                <Image
                    src={ProfilePic}
                    height={100}
                    width={300}
                    alt="Profile image"
                    className={`${style.im} ${style.image_drag}`}
                />
            </div> 
            <div className={style.msg_tm}>
                <div className={style.msg_holder}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias tempore impedit? Voluptatibus repellat labore omnis nulla totam est expedita voluptatem provident dolore itaque reprehenderit, vel temporibus? Ad, mollitia maiores!
                </div>
                <div className={style.msg_time}>12:21PM</div>
            </div>

    </div>;
}

export default ChatIn;