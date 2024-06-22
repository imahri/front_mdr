"use client"
import style from "./start_game.module.css"
import { FaPlay } from "react-icons/fa6";


const PauseGame = ({PlayIt}) => {

    return <div className={style.overlayp}>
            <p>Game</p>
            <p>Paused</p>
            <div className={style.play}
                onClick={()=> {
                    PlayIt()
                }}
            >
                <FaPlay  size={35}/>
                resume
            </div>
        </div>;
}

export default PauseGame;