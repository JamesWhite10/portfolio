import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.data}>
                    <input type={"tel"} className={style.tel} placeholder="Phone number"/>
                    <input type={"email"} className={style.email} placeholder="Email"/>
                    <textarea className={style.textarea} placeholder="Enter your message"/>
                    <p><input type="submit"/></p>
                </form>
            </div>
        </div>
    )
}