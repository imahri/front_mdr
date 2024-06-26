"use client"
import style from "./choices.module.css"
import Image from "next/image";
import bg1 from "../../picture/hard_card/one.png"
import bg2 from "../../picture/hard_card/two.png"
import bg3 from "../../picture/hard_card/three.png"
import Link from "next/link";

const Choices = () => {

    return <div>
        <div className={style.containerS}>
                <div className={`${style.card_box} ${style.back1}`}>
                    <Link href={"/game"}>
                        <div className={style.over}>
                            <p className={`${style.des}`}>TOURNAMENTS</p>
                        </div>
                    </Link>
                </div>
            <div className={`${style.card_box} ${style.back2}`}>
                <Link href={"/game"}>
                    <div className={style.over}>
                        <p className={`${style.des}`}>TRAINING</p>
                    </div>
                </Link>
            </div>
            <div className={`${style.card_box} ${style.back3}`}>
                <Link href={"/game"}>
                    <div className={style.over}>
                        <p className={`${style.des}`}>1 VS 1</p>
                    </div>
                </Link>
            </div>
            
        </div>
        <div className={style.container}>
            <div className={style.base}>
                <Link href={"/game"}>
                    <Image 
                        src={bg1}
                        width={500}
                        height={500}
                        className={`${style.box1} ${style.box}`}
                        alt="choices"
                    />
                    <p className={`${style.des} ${style.tour}`}>TOURNAMENTS</p>
                </Link>
            </div>
            <div className={style.base}>
                <Link href={"/game"}>
                    <Image 
                        src={bg2}
                        width={500}
                        height={500}
                        className={`${style.box2} ${style.box}`}
                        alt="choices"
                    />
                    <p className={`${style.des} ${style.train}`}>TRAINING</p>
                </Link>
            </div>
            <div className={style.base}>
                <Link href={"/game"}>
                    <Image 
                        src={bg3}
                        width={500}
                        height={500}
                        className={`${style.box3} ${style.box}`}
                        alt="choices"
                    />
                    <p className={`${style.des} ${style.vs}`}>1 VS 1</p>
                </Link>
            </div>
        </div>
    </div>;
}

export default Choices;