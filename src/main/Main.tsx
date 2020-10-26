import React from 'react';
import s from './Main.module.css'
import styleContainer from '../сommon/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainblock}>
        <div className={styleContainer.container}>
                <div className={s.welcome}>
                    <span>Hi There</span>
                    <h1>I am Filipp Kotenko</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}


