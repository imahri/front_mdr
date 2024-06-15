"use client"
import style from "./navbar.module.css"

const NavBar = () => {
    return <div className={style.container}>
        <button className={`${style.but}`}>sign in</button>
        <button className={`${style.but} ${style.sup}`}>sign up</button>
    </div>;
}

export default NavBar;