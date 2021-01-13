import React from 'react';
import styles from "../css/advert.module.css";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export const getImage = graphql`
{
    file(relativePath: { eq: "Foundation_Gatsby.tif" }) {
        childImageSharp {
            fixed(height: 280) {
                ...GatsbyImageSharpFixed_withWebp
            }
        }
    }
}
`

const Advert = () => {
    const response = useStaticQuery(getImage);

    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <Img fixed={response.file.childImageSharp.fixed} alt="the book cover" />
                <div className={styles.button__container}>
                    <a href="https://www.apress.com/in/book/9781484265574" target="_blank" rel="noopener noreferrer" className={styles.apress__book}><span>Buy from</span><span>apress.com</span></a>
                    <a href="https://www.amazon.in/Foundation-Gatsby-Projects-Production-Websites-ebook/dp/B08PCSBV9M" target="_blank" rel="noopener noreferrer" className={styles.amazon__book}><img src="https://www.niftybuttons.com/amazon/amazon-button2.png" alt="amazon button" /></a>
                </div>
            </div>
        </section>
    )
}

export default Advert;
