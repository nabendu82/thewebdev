import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import styles from "../css/home.module.css";
import PostList from "../components/PostList";
import TagList from "../components/TagList";
import { graphql, useStaticQuery } from "gatsby";
import cover from "../images/cover.png";
import { FaSortAmountUp } from "react-icons/fa";
import Menu from "../components/Menu/Menu";
import Burger from "../components/Burger/Burger";
import { useOnClickOutside } from "../constants/hooks";

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
                tags
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
    const allPosts = response.allMdx.edges;
    const emptyQuery = ""
    const [state, setState] = React.useState({
        filteredData: [],
        query: emptyQuery,
    });
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const handleInputChange = event => {
        const query = event.target.value
        const posts = response.allMdx.edges || []
        const filteredData = posts.filter(post => {
            const { title, tags, author } = post.node.frontmatter;
            const { excerpt } = post.node;
            return (
                author.toLowerCase().includes(query.toLowerCase()) ||
                excerpt.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                tags.join("").toLowerCase().includes(query.toLowerCase())
            )
        })
        setState({
          query, // with current query string from the `Input` event
          filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
        })
    }

    const { filteredData, query } = state;
    const hasSearchResults = filteredData && query !== emptyQuery;
    const posts = hasSearchResults ? filteredData : allPosts;

    return (
        <Layout>
            <div className={styles.mobileMenu}>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <h2 className={styles.mobileHeader}>My TWD</h2>
                <button type="button" className={styles.logoBtn} >
                    <FaSortAmountUp className={styles.logoIcon} />
                </button>
            </div>
            <div className={styles.home}>
                <section className={styles.right__sec}>
                    <TagList tags={posts} />
                </section>
                <section className={styles.blog__sec}>
                    <div className={styles.searchBox}>
                        <input
                        className={styles.searchInput}
                        type="text"
                        id="filter"
                        placeholder="Type to filter posts..."
                        onChange={handleInputChange}
                        />
                    </div>
                    <PostList posts={posts} />
                </section>
                <section className={styles.left__sec}>
                    <section className={styles.sponserAds}>
                        <div className={styles.advert1}>
                            <img src={cover} className={styles.coverImg} alt="the book cover" />
                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    )
}
