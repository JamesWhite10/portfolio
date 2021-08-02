import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../Title/Title";
import {Top} from "../Top/Top";

export const Contacts = () => {
    return (
        <div id={"contacts"} className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={style.data}>
                   <div><img className={style.icon} src={"https://icon-library.com/images/phone-white-icon/phone-white-icon-23.jpg"} alt={"telephone"}/>+7 960 607 25 08</div>
                    <div><img className={style.icon} src={"https://www.pngkit.com/png/full/222-2226274_white-email-icon-png-download-mail-symbol-png.png"} alt={"email"}/>max.migalin10@gmail.com</div>
                    <div><img className={style.icon} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-BB0ED7kp7stB94xjUw1la8MVXvBq-GKtQ&usqp=CAU"} alt={"linkedin"}/><a href={"https://www.linkedin.com/in/maxmigalin10/"}>LinkedIn</a></div>
                    <div><img className={style.icon} src={"https://i1.wp.com/beckydrexler.com/wp-content/uploads/2017/09/instagram-logo-white.png?ssl=1"} alt={"instagram"}/><a href={"https://www.instagram.com/migalin_mi/"}>Instagram</a></div>
                    <div><img className={style.icon} src={"https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fmonochrome_large.png%3Fversion%3D0?w=240&h=240&s=bfee4a7a5101cad749a9269a7bc43035"} alt={"github"}/><a href={"https://github.com/JamesWhite10"}>GitHub</a></div>
                    <div><img className={style.icon} src={"https://assets.ifttt.com/images/channels/1205930553/icons/monochrome_large.png"} alt={"telegram"}/><a href={"https://telegram.me/max_migalin"}>Telegram</a></div>
                </form>
               <Top/>
            </div>
        </div>
    )
}