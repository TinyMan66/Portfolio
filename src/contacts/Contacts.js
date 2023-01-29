import React from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade bottom>
                <div className={style.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <Fade direction={"left"} className={style.fade}>
                        <form className={style.form}>
                            <input type="text" className={style.formArea} placeholder="Name"/>
                            <input type="text" className={style.formArea} placeholder="e-mail"/>
                            <textarea className={style.messageArea} placeholder="Message"></textarea>
                            <button type="submit">send message</button>
                        </form>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
}