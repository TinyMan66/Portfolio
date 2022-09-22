import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <a className={style.button} href="/#">Send</a>
            </div>
        </div>
    );
}