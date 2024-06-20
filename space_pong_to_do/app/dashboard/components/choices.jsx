"use client"
import style from "./choices.module.css"
import Image from "next/image";
// import bg1 from "../../picture/hard_card/trf1.png"
// import bg2 from "../../picture/hard_card/trf2.png"
// import bg3 from "../../picture/hard_card/trf3.png"
import bg1 from "../../picture/hard_card/one.png"
import bg2 from "../../picture/hard_card/two.png"
import bg3 from "../../picture/hard_card/three.png"

const Choices = () => {
    return <div className={style.container}>
        <div className={style.base}>
            <Image 
                src={bg1}
                width={500}
                height={500}
                className={`${style.box1} ${style.box}`}
            />
            <p className={`${style.des} ${style.tour}`}>TOURNAMENTS</p>
        </div>
        <div className={style.base}>
            <Image 
                src={bg2}
                width={500}
                height={500}
                className={`${style.box2} ${style.box}`}
            />
            <p className={`${style.des} ${style.train}`}>TRAINING</p>
        </div>
        <div className={style.base}>
            <Image 
                src={bg3}
                width={500}
                height={500}
                className={`${style.box3} ${style.box}`}
            />
            <p className={`${style.des} ${style.vs}`}>1 VS 1</p>
        </div>
    </div>;
}

export default Choices;