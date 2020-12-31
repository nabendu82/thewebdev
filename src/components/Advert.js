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
                <a href="https://www.apress.com/in/book/9781484265574" target="_blank" rel="noopener noreferrer">Buy Book</a>
            </div>
        </section>
    )
}

export default Advert;
