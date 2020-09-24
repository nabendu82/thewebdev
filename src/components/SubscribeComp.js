import React from 'react';
import styles from "../css/advert.module.css";
import Subscribe from './subscribe';

const SubscribeComp = () => {
    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <Subscribe />
            </div>
        </section>
    )
}

export default SubscribeComp;
