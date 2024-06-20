"use client"
import style from "./base.module.css"
import styles from "./MDashboard.module.css"
import { MdOutlineLock } from "react-icons/md";
import LooP from "../../picture/icons8-search-128.png"
import R1 from "../../picture/rank1.png"
import R2 from "../../picture/rank2.png"
import R3 from "../../picture/rank3.png"
import R4 from "../../picture/rank4.png"
import R5 from "../../picture/rank5.png"
import Pic from "../../picture/imahri.jpeg"
import Image from "next/image";
import ContFriend from "./container_friend"
import Field from "./Friend_Field"
import SearchPlayer from "./Search"
import CardF from "./card"
import CardL from "./cardLeader"

const BaseExec = () => {
    return <div>
        {/* <SearchPlayer /> */}
        {/* <Field /> */}
        <div className={styles.container}>
            <div className={`${styles.layer} ${styles.dashboard}`}>
                <div className={styles.text_holders}>
                    <h1 className={styles.text_ti}>Congratulations, Celestial Master!</h1>
                    <p className={styles.text_de}>You've ascended to the highest echelons of cosmic mastery, basking in the brilliance of the Sun itself. As a true luminary of the cosmos, your journey knows no bounds. Shine on, and may your light guide others to new celestial heights!</p>
                </div>
                <div className={styles.card_holders}>
                    <CardF />
                    <CardL />
                </div>
            </div>
            
            {/* <div className={`${styles.layer} ${styles.dashboard}`}>
                <div className={styles.text_holders}>
                    <h1>Congratulations, Celestial Master!</h1>
                    <p>You've ascended to the highest echelons of cosmic mastery, basking in the brilliance of the Sun itself. As a true luminary of the cosmos, your journey knows no bounds. Shine on, and may your light guide others to new celestial heights!</p>
                </div>
                <div className={styles.card_holders}>
                    <Cards />
                    <Cards />
                </div>
            </div> */}

            {/* <div className={`${styles.layer} ${styles.game}`}>
                game
            </div> */}
        </div>

    </div>;

}

export default BaseExec;