"use client"
import style from "./start_game.module.css"
import { useState } from "react";
import GameEl from "./game_elemnt"
import Res from "./res"
import PauseGame from "./pause"


const GameON = () => {
    const [pause, setPause] =  useState(false);
    
    const PauseIt = () => {
        setPause(true);
	};
    const PlayIt = () => {
        setPause(false);
	};

    return <div className={style.container}>

        {
            pause && <PauseGame PlayIt={PlayIt}/>
        }

        <Res PauseIt={PauseIt}/>

        <GameEl/>

    </div>;
}

export default GameON;