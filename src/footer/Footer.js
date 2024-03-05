import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faFacebook,
    faTelegram,
    faSquareWhatsapp,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import {Fade} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <Title titleStyle={style.name} text={"Diana Lipanova"}/>
                    <div className={style.socialContainer}>
                        <div className={style.socialIcon}>
                            <a href="https://www.linkedin.com/in/diana-lipanova/">
                                <FontAwesomeIcon icon={faLinkedin} className={style.icon}/>
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="https://www.facebook.com/lipanovadiana">
                                <FontAwesomeIcon icon={faFacebook} className={style.icon}/>
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="https://t.me/TinyMan6">
                                <FontAwesomeIcon icon={faTelegram} className={style.icon}/>
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="">
                                <FontAwesomeIcon icon={faSquareWhatsapp} className={style.icon}/>
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="https://github.com/TinyMan66">
                                <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                            </a>
                        </div>
                    </div>
                    <span className={style.copyright}> 2022, All rights reserved</span>
                </div>
            </Fade>
        </div>
    );
}