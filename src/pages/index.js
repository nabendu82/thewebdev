import React from "react";
import Layout from "../components/Layout";
import styles from "../css/home.module.css";
import PostList from "../components/PostList";
import { graphql, useStaticQuery } from "gatsby";

const getPosts = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
            node {
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                author
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            excerpt
            }
        }
    }
}
`

export default () => {
    const response = useStaticQuery(getPosts);
    const posts = response.allMdx.edges;
    console.log(response);

    return (
        <Layout>
            <div className={styles.home}>
                <section className={styles.right__sec}></section>
                <section className={styles.blog__sec}>
                    <PostList post={posts} />
                </section>
                <section className={styles.left__sec}></section>
            </div>
        </Layout>
    )
}
