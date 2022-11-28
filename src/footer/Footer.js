import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTelegram, faSquareWhatsapp, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title titleStyle={style.name} text={"Diana Lipanova"}/>
                <div className={style.socialContainer}>
                    <div className={style.social}><FontAwesomeIcon icon={faLinkedin}/></div>
                    <div className={style.social}><FontAwesomeIcon icon={faFacebook}/></div>
                    <div className={style.social}><FontAwesomeIcon icon={faTelegram}/></div>
                    <div className={style.social}><FontAwesomeIcon icon={faSquareWhatsapp}/></div>
                    {/*<div className={style.social}><FontAwesomeIcon icon={faInstagram}/></div>*/}
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    );
}