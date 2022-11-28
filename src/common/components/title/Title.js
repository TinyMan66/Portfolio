import React from 'react';
import style from './Title.module.scss';

export const Title = (props) => {
    return (
        <div className={props.titleStyle? props.titleStyle : style.title}>
            <h2>{props.text}</h2>
        </div>
    );
}