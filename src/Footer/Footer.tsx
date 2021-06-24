import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Maxim Migalin</h3>
             <div className={style.socialContainer}>
                 <span className={style.icon}></span>
                 <span className={style.icon}></span>
                 <span className={style.icon}></span>
                 <span className={style.icon}></span>
             </div>
                <p>&copy; All rights reserved</p>
            </div>
        </div>
    )
}