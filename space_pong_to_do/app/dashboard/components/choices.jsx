"use client"
import style from "./choices.module.css"
import Image from "next/image";
import bg1 from "../../picture/hard_card/trf1.png"
import bg2 from "../../picture/hard_card/trf2.png"
import bg3 from "../../picture/hard_card/trf3.png"

const Choices = () => {
    return <div className={style.container}>
        <div>
            <Image 
                src={bg1}
                width={500}
                height={500}
                className={`${style.box1} ${style.box}`}
            />
        </div>
        <div>
            <Image 
                src={bg2}
                width={500}
                height={500}
                className={`${style.box2} ${style.box}`}
            />
        </div>
        <div>
            <Image 
                src={bg3}
                width={500}
                height={500}
                className={`${style.box3} ${style.box}`}
            />
        </div>
    </div>;
}

export default Choices;