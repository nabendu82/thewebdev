import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaGithub, FaTwitterSquare, FaDev } from "react-icons/fa"

const postTemplate = ({ data }) => {
    const { title, date, author, twitter, github, dev, image } = data.mdx.frontmatter;
    const { body } = data.mdx;
    const img = image.childImageSharp.fluid;

    return (
        <Layout>
            <section className={styles.template}>
                <Link to="/" className={styles.link}>
                    back to all posts
                </Link>
                <div className={styles.info}>
                    <h1>{title}</h1>
                    <h4>
                        <span>by {author}</span> / <span>{date}</span>
                    </h4>
                </div>
                <Image fluid={img} />
                <div className={styles.content}>
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <div className={styles.author}>
                    <h1>{author}</h1>
                    {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
                                    {<FaTwitterSquare />}</a>}
                    {github && <a href={github} target="_blank" rel="noopener noreferrer">{<FaGithub />}</a>}
                    {dev && <a href={dev} target="_blank" rel="noopener noreferrer">{<FaDev />}</a>}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            twitter
            github
            dev
            image {
            childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        body
    }
}
`

export default postTemplate;
