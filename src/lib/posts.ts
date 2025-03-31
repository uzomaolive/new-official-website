import fs from "fs"; // Node.js file system module for reading files
import path from "path"; // Node.js module for handling and transforming file paths
import matter from "gray-matter"; // Extracts frontmatter metadata from Markdown files
import slugify from "slugify"; // Converts titles into URL-friendly slugs
import readingTime from "reading-time"; // Calculates estimated reading time for the content

// Define the directory where blog posts are stored
const postsDirectory = path.join(process.cwd(), "bloglist"); // Resolves to the absolute path of the "bloglist" folder

// Define the expected structure of a blog post
export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    featured_image: string;
    date: string;
    tags: string[];
    excerpt: string;
    author?: string;
    author_image?: string;
  };
  content: string;
  readingTime: { text: string };
};

// Function to get all blog posts
export function getAllPosts(): Post[] {
  // Read all filenames inside the blog directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Process each Markdown file
  const posts: Post[] = fileNames.map((fileName) => {
    // Construct the full file path
    const fullPath = path.join(postsDirectory, fileName);

    // Read the file content as a UTF-8 string
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract frontmatter metadata (e.g., title, date) and content from the Markdown file
    const { data: frontmatter, content } = matter(fileContents);

    // Track missing required frontmatter fields
    const missingFields: string[] = [];
    if (!frontmatter.title) missingFields.push("title");
    if (!frontmatter.featured_image) missingFields.push("featured_image");
    if (!frontmatter.date) missingFields.push("date");
    if (!frontmatter.tags || !Array.isArray(frontmatter.tags)) missingFields.push("tags (must be an array)");
    if (!frontmatter.excerpt) missingFields.push("excerpt");


    // Generate a slug from the title (lowercase, URL-friendly)
    const slug = slugify(frontmatter.title, { lower: true, strict: true });

    // Calculate estimated reading time for the content
    const readTime = readingTime(content);

    // Return the processed post data
    return {
      slug, // URL-friendly identifier for the post
      frontmatter: {
        title: frontmatter.title,
        featured_image: frontmatter.featured_image,
        date: frontmatter.date,
        tags: frontmatter.tags,
        excerpt: frontmatter.excerpt,
        author: frontmatter.author || "Unknown",
        author_image: frontmatter.author_image || "/images/default-author.jpg",
      },
      content,
      readingTime: readTime,
    };
  });

  return posts;
}

// Function to get a single blog post by its slug
export function getPostBySlug(slug: string): Post | undefined {
  // Retrieve all blog posts
  const posts = getAllPosts();

  // Find and return the post that matches the given slug
  return posts.find((post) => post.slug === slug);
}
