import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-tsparticles';

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
    },
};

export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <div className={style.greeting}>
                    <p>Hi There!</p>
                    <h1>
                        I'm <span>Diana <span>Lipanova</span></span>
                    </h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
}