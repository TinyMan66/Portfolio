import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There </span>
                    <h1>I am Diana Lipanova</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}