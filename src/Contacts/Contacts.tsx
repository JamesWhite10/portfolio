import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../Title/Title";

export const Contacts = () => {
    return (
        <div id={"contacts"} className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={style.data}>
                   <div><img className={style.icon} src={"https://icon-library.com/images/phone-white-icon/phone-white-icon-23.jpg"} alt={"telephone"}/>+7 960 607 25 08</div>
                    <div><img className={style.icon} src={"https://www.pngkit.com/png/full/222-2226274_white-email-icon-png-download-mail-symbol-png.png"} alt={"email"}/>max.migalin10@gmail.com</div>
                    <div><img className={style.icon} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-BB0ED7kp7stB94xjUw1la8MVXvBq-GKtQ&usqp=CAU"} alt={"linkedin"}/>linkedin.com/in/maxmigalin10</div>
                    <div><img className={style.icon} src={"https://i1.wp.com/beckydrexler.com/wp-content/uploads/2017/09/instagram-logo-white.png?ssl=1"} alt={"instagram"}/>migalin_mi</div>
                </form>
                <a href={"#nav"}>Top</a>
            </div>
        </div>
    )
}