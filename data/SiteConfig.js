module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "theGreatKingBear", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Idea Pot", // Site title.
  siteTitleAlt: "Idea Pot themed by tech", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://thegreatkingbear.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/",
  siteDescription:
    "Mainly tech blog, but small insights sometimes", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog_cover_image_1200.jpeg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: false, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  disqusShortname: "thegreatkingbearblog", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/thegreatkingbear/",
    "https://www.facebook.com/mookyung.kwak.9",
    "mailto:passion.proof@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/thegreatkingbear/",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/mookyung.kwak.9",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:passion.proof@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Gatsby Casper Starter" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
