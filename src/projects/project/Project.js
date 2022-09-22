import React from 'react';
import style from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.button} href="/#">Look at</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}