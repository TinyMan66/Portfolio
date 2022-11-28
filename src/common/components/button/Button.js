import React from 'react';
import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <a className={style.button} href={props.path}>{props.buttonName}</a>
    )
}
