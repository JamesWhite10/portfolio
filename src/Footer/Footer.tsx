import React from "react";
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../Title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Maxim"}/>
             <div className={style.socialContainer}>
                 <span className={style.icon}><img className={style.image} src={"http://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png"} alt={"html & css"}/></span>
                 <span className={style.icon}><img className={style.image} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} alt={"JavaScript"}/></span>
                 <span className={style.icon}><img className={style.image} src={"https://avatars.githubusercontent.com/u/6412038?s=200&v=4"} alt={"react"}/></span>
                 <span className={style.icon}><img className={style.image} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWLBe-VaJIYEbmTPrm1XyFy35MInioRpbpKK48hmPbj-m8TCYEG_GSIUZZIpXNuTqG-U&usqp=CAU"} alt={"redux"}/></span>
                 <span className={style.icon}><img className={style.image} src={"https://www.bryntum.com/wp-content/uploads/2019/03/ts.png"} alt={"typeScript"}/></span>
                 <span className={style.icon}><img className={style.image} src={"https://web-profi.by/wp-content/uploads/git.jpg"} alt={"git"}/></span>
             </div>
                <p className={style.rights}>&copy; {new Date().getFullYear()}, All rights reserved</p>
            </div>
        </div>
    )
}