/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://oliveuzoma.com", // Site URL
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Limit the number of URLs per sitemap file
  exclude: ["/admin", "/dashboard"], // Exclude private routes
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all user-agents to crawl everything
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};

module.exports = config; // Use CommonJS export
