"use client"
import style from "./start.module.css"
import Link from "next/link";

const Start = () => {
    return <div className={style.container}>
        <div className={style.title}>STARTSERV</div>
        <div className={style.subtitle}>Ping Pong in Zero-G!</div>
        <div className={style.description}>
            <p>Join the ultimate space ping pong adventure on Venus! Serve, spin, and score in zero-gravity.</p>
            <p>Come along for an unforgettable adventure of space competition and celestial marvels.</p>
        </div>
        <div className={style.starting}>
            <Link href="/auth/sign_in">
                <button className={`${style.but} ${style.sup}`}>Get Started</button>
            </Link>
        </div>
    </div>;
}

export default Start;
