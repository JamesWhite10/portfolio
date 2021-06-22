import React from "react";
import style from "./Main.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.greeting}></div>
            <div className={style.photo}></div>
        </div>
    )
}