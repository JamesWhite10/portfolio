import React from "react";
import style from "./Main.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import photo from "../assets/image/photo2.jpg"

export const Main = () => {
    return (
        <div id={"main"} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Maxim Migalin</h1>
                    <p>Front-End Developer.</p>
                </div>
                <div className={style.photo}>
                    <img className={style.photo} src={photo} alt={"My Photo"}/>
                </div>
            </div>
        </div>
    )
}