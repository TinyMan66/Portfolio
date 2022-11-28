import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <Button path={"/#"} buttonName={"Send"}/>
            </div>
        </div>
    );
}