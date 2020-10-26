import React from 'react';
import styles from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = ({title,description}: ProjectPropsType) => {
    return (
    <div className={styles.project}>
        <div className={styles.photo}>
            <a href="">View</a>
        </div>
            <h3>{title}</h3>
            <p>{description}</p>
    </div>
    );
}

