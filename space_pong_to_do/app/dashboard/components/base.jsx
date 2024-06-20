"use client"
import style from "./base.module.css"
import styles from "./MDashboard.module.css"
import Image from "next/image";
import CardF from "./card"
import CardL from "./cardLeader"
import bg1 from "../../picture/hard_card/trf1.png"
import bg2 from "../../picture/hard_card/trf2.png"
import bg3 from "../../picture/hard_card/trf3.png"
import box from "../../picture/hard_card/box.png"
import Choice from "./choices"


const BaseExec = () => {
    return <div>
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
            <div className={`${styles.layer} ${styles.game}`}>
                    <Choice />
                    dasdas
            </div>
            
        </div>

    </div>;

}

export default BaseExec;