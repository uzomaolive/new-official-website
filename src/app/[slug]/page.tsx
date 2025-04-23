import { Metadata } from "next";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from "next/image";

// Disable TypeScript checking for Next.js page props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.frontmatter?.title ?? "Untitled"} - Olive Uzoma`,
    description: post.frontmatter?.excerpt ?? "",
    openGraph: {
      url: `https://oliveuzoma.com/${post.slug ?? ""}`,
      title: post.frontmatter?.title ?? "Untitled",
      description: post.frontmatter?.excerpt ?? "",
      images: [
        {
          url: post.frontmatter?.featured_image ?? "",
          width: 800,
          height: 600,
          alt: post.frontmatter?.title ?? "Blog Post Image",
        },
      ],
      siteName: "Olive Uzoma",
    },
    twitter: {
      creator: "@oliveuzoma",
      card: "summary_large_image",
      title: `${post.frontmatter?.title ?? "Untitled"} - Olive Uzoma`,
      description: post.frontmatter?.excerpt ?? "",
      images: {
        url: post.frontmatter?.featured_image ?? "",
        alt: post.frontmatter?.title ?? "Blog Post Image",
      },
    },
  };
}

// Disable TypeScript checking for Next.js page props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage(props: any) {
  const { slug } = props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Handle reading time safely
  const readingTimeDisplay = post.readingTime
    ? typeof post.readingTime === "object"
      ? post.readingTime.text || "1 min read"
      : `${post.readingTime} min read`
    : null;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Enhanced Header with Text First, Image After */}
      <header className="relative">
        <div className="w-full bg-indigo-50 dark:bg-gray-900 pt-20 pb-10 px-[12rem] lg:px-[20rem]">
          <div className="container mx-auto px-6 pt-12 text-left">
            {/* First Tag (if available) */}
            {post.frontmatter?.tags?.length > 0 && (
              <span className="inline-block px-4 py-1 mb-6 bg-indigo-600/80 text-white rounded-full text-sm font-medium">
                {post.frontmatter.tags[0]}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 dark:text-white mb-6 drop-shadow-md">
              {post.frontmatter?.title ?? "Untitled"}
            </h1>

            {/* Excerpt/Summary */}
            <p className="text-indigo-800/90 dark:text-white/90 text-lg md:text-xl mx-auto mb-8">
              {post.frontmatter?.excerpt ?? ""}
            </p>

            {/* Author, Date, Reading Time */}
            <div className="flex text-indigo-700/90 dark:text-white/80 space-x-4 mb-16">
              <div className="flex items-center">
                <span className="text-sm">By {post.frontmatter?.author ?? "Unknown"}</span>
              </div>

              <div className="flex items-center">
                <time dateTime={post.frontmatter?.date ?? ""} className="text-sm">
                  {post.frontmatter?.date
                    ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Unknown Date"}
                </time>
              </div>

              {readingTimeDisplay && (
                <div className="flex items-center">
                  <span className="text-sm">{readingTimeDisplay}</span>
                </div>
              )}
            </div>

            {/* Featured Image After Text */}
            {post.frontmatter?.featured_image && (
              <div className="w-full mx-auto h-[50vh] md:h-[60vh] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={post.frontmatter.featured_image}
                  alt={post.frontmatter.title || "Featured image"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Decorative Wave Separator */}
        <div className="w-full h-16 overflow-hidden">
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white dark:fill-gray-900"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-[17rem] py-8 -mt-6 relative">
        <article className="prose dark:prose-invert lg:prose-lg max-w-none bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 text-gray-800 dark:text-gray-200 leading-[2.625]">
          <MDXRemote source={post.content ?? ""} components={{}} />
        </article>

        {/* Tags Section */}
        {post.frontmatter?.tags?.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-indigo-50 dark:bg-gray-800 text-indigo-700 dark:text-white rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
