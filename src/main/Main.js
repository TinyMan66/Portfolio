import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css';
import mainPhoto from '../assets/images/mainPhoto.jpg';
import Particles from 'react-tsparticles';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
    },
};

export const Main = () => {
    const mPhoto = {
        backgroundImage: `url(${mainPhoto})`
    };

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There </span>
                    <h1>
                        I'm <span>Diana Lipanova</span>
                    </h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo} style={mPhoto}></div>
            </div>
        </div>
    );
}