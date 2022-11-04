import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                {/*<h2 className={style.title}>Diana Lipanova</h2>*/}
                <Title text={"Diana Lipanova"}/>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    );
}