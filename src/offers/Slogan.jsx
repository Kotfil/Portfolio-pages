import React from 'react';
import styles from './Slogan.module.css';

export const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                    <h2>
                        Considering options for remote work
                    </h2>
                <button>Send me email</button>
            </div>
        </div>
    );
}

