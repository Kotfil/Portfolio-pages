import React from 'react';
import styles from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <h2>Contacts</h2>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

