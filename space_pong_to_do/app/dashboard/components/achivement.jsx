"use client"
import style from "./achivement.module.css"
import Image from "next/image";
import ACH1 from "../../picture/rank1.png"
import ACH2 from "../../picture/rank2.png"
import ACH3 from "../../picture/rank3.png"
import ACH4 from "../../picture/rank4.png"
import ACH5 from "../../picture/rank5.png"
import Prog from "./progress"



const Achivement = () => {
    return <div>
        <div className={style.container}>
            <div className={style.holder}>
                <div><p className={style.title_leader}>Achievements</p></div>
                <div className={style.Achievement}>
                    <div className={style.ach}>
                        <Image 
                            src={ACH1}
                            width={100}
                            height={100}
                            alt="first achivement"
                            className={style.imp}
                        />
                        <p className={style.ach_title} >Novice Astronaut</p>
                    </div>
                    <div className={style.ach}>
                        <Image 
                            src={ACH2}
                            width={100}
                            height={100}
                            alt="first achivement"
                            className={style.imp}
                        />
                        <p className={style.ach_title} >Cosmic Explorer</p>
                    </div>
                    <div className={style.ach}>
                        <Image 
                            src={ACH3}
                            width={100}
                            height={100}
                            alt="first achivement"
                            className={style.imp}
                        />
                        <p className={style.ach_title} >Stellar Voyager</p>
                    </div>
                    <div className={style.ach}>
                        <Image 
                            src={ACH4}
                            width={100}
                            height={100}
                            alt="first achivement"
                            className={`${style.imp} ${style.earth}`}
                        />
                        <p className={style.ach_title} >Galactic Trailblazer</p>
                    </div>
                    <div className={style.ach}>
                        <Image 
                            src={ACH5}
                            width={100}
                            height={100}
                            alt="first achivement"
                            className={style.imp}
                        />
                        <p className={style.ach_title} >Celestial Master</p>
                    </div>
                </div>
                <div className={style.chart}>
                    <Prog/>
                </div>
            </div>
        </div>
    </div>;

}

export default Achivement;