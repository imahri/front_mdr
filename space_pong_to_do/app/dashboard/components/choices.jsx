"use client"
import style from "./choices.module.css"
import Image from "next/image";
import bg1 from "../../picture/hard_card/one.png"
import bg2 from "../../picture/hard_card/two.png"
import bg3 from "../../picture/hard_card/three.png"

const Choices = () => {

    return <div>
        <div className={style.containerS}>
            <div className={`${style.card_box} ${style.back1}`}>
                <div className={style.over}>
                    <p className={`${style.des}`}>TOURNAMENTS</p>
                </div>
            </div>
            <div className={`${style.card_box} ${style.back2}`}>
                <div className={style.over}>
                    <p className={`${style.des}`}>TRAINING</p>
                </div>
            </div>
            <div className={`${style.card_box} ${style.back3}`}>
                <div className={style.over}>
                    <p className={`${style.des}`}>1 VS 1</p>
                </div>
            </div>
            
        </div>
        <div className={style.container}>
            <div className={style.base}>
                <Image 
                    src={bg1}
                    width={500}
                    height={500}
                    className={`${style.box1} ${style.box}`}
                    alt="choices"
                />
                <p className={`${style.des} ${style.tour}`}>TOURNAMENTS</p>
            </div>
            <div className={style.base}>
                <Image 
                    src={bg2}
                    width={500}
                    height={500}
                    className={`${style.box2} ${style.box}`}
                    alt="choices"
                />
                <p className={`${style.des} ${style.train}`}>TRAINING</p>
            </div>
            <div className={style.base}>
                <Image 
                    src={bg3}
                    width={500}
                    height={500}
                    className={`${style.box3} ${style.box}`}
                    alt="choices"
                />
                <p className={`${style.des} ${style.vs}`}>1 VS 1</p>
            </div>
        </div>
    </div>;
}

export default Choices;