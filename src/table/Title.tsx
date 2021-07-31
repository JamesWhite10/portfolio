import React from "react";
import style from "./Title.module.scss";

type TableOfContentsType = {
    title: string
}

export const Title: React.FC<TableOfContentsType> = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}
