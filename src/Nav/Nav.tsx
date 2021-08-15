import React from "react";
import style from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div id={"nav"} className={style.nav}>
            <a href={"#main"} className={`${style.link} ${style.active}`}>Main</a>
            <a href={"#skills"} className={`${style.link} ${style.active}`}>Skills</a>
            <a href={"#projects"} className={`${style.link} ${style.active}`}>Projects</a>
            <a href={"#contacts"} className={`${style.link} ${style.active}`}>Contacts</a>
        </div>
    )
}