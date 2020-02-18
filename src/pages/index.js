import React from "react";
import Layout from "../components/Layout";
import styles from "../css/home.module.css"

export default () => (
    <Layout>
        <div className={styles.home}>
            <section className={styles.right__sec}></section>
            <section className={styles.blog__sec}></section>
            <section className={styles.left__sec}></section>
        </div>
    </Layout>
)
