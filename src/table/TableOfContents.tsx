import React from "react";
import style from "./TableOfContents.module.css";

type TableOfContentsType = {
    title: string
}

export const TableOfContents: React.FC<TableOfContentsType> = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}