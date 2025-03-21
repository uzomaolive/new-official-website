import fs from "fs"; // Node.js file system module for reading files
import path from "path"; // Node.js module for handling and transforming file paths
import matter from "gray-matter"; // Extracts frontmatter metadata from Markdown files
import slugify from "slugify"; // Converts titles into URL-friendly slugs
import readingTime from "reading-time"; // Calculates estimated reading time for the content

// Define the directory where blog posts are stored
const postsDirectory = path.join(process.cwd(), "blog"); // Resolves to the absolute path of the "blog" folder

// Function to get all blog posts
export function getAllPosts() {
  // Read all filenames inside the blog directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Process each Markdown file
  const posts = fileNames.map((fileName) => {
    // Construct the full file path
    const fullPath = path.join(postsDirectory, fileName);

    // Read the file content as a UTF-8 string
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract frontmatter metadata (e.g., title, date) and content from the Markdown file
    const { data: frontmatter, content } = matter(fileContents);

    // Generate a slug from the title (lowercase, URL-friendly)
    const slug = slugify(frontmatter.title, { lower: true, strict: true });

    // Calculate estimated reading time for the content
    const readTime = readingTime(content);

    // Return the processed post data
    return {
      slug, // URL-friendly identifier for the post
      frontmatter, // Contains metadata like title, date, etc.
      content, // The actual Markdown content
      readingTime: readTime, // Estimated reading time
    };
  });

  // Return the list of processed blog posts
  return posts;
}

// Function to get a single blog post by its slug
export function getPostBySlug(slug: string) {
  // Retrieve all blog posts
  const posts = getAllPosts();

  // Find and return the post that matches the given slug
  return posts.find((post) => post.slug === slug);
}
