module.exports = {
  siteMetadata: {
    title: `TheWebDev Blog`,
    author: `Nabendu Biswas`,
    description: `Blog post by Nabendu Biswas to share stuff i learn in my Web development journey`,
    siteUrl: `https://thewebdev.tech/`,
    keywords: [
      "Nabendu",
      "Biswas",
      "UI Lead",
      "GatsbyJs",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "React developer",
      "Front-end Engineer",
      "GraphQL"
    ],
    social: {
      twitter: `nabendu82`,
      github: `nabendu82`,
      email: `nabendu.biswas@gmail.com`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
          host: 'https://thewebdev.tech/',
          sitemap: 'https://thewebdev.tech/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
