import { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import AuthorBlob from "@/app/components/AuthorBlob";
import { siteMetaData } from "@/config/siteMetaData";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Post = {
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    featured_image?: string;
    author_image?: string;
    author?: string;
    tags?: string[];
  };
  readingTime: {
    text: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.frontmatter.title} - Olive Uzoma`,
    description: post.frontmatter.excerpt,
    openGraph: {
      url: `https://oliveuzoma.com/${post.slug}`,
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: [
        {
          url: post.frontmatter.featured_image,
          width: 800,
          height: 600,
          alt: post.frontmatter.title,
        },
      ],
      siteName: "Olive Uzoma",
    },
    twitter: {
      creator: "@oliveuzoma",
      card: "summary_large_image",
      title: `${post.frontmatter.title} - Olive Uzoma`,
      description: post.frontmatter.excerpt,
      images: {
        url: post.frontmatter.featured_image,
        alt: post.frontmatter.title,
      },
    },
  };
}

export default async function BlogPost({ params }: any) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <main className="flex flex-col w-full">
        <div
          className="featured-image"
          style={{
            backgroundImage: `url(${post.frontmatter?.featured_image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: `calc(100vh - 400px)`,
          }}
        ></div>
        <div
          className="w-11/12 lg:w-4/5 xl:w-3/4 bg-white self-center h-60 relative bottom-36"
          style={{ boxShadow: `0px -20px 20px rgba(0, 0, 0, 0.2)` }}
        ></div>
        <div className="w-11/12 lg:w-4/5 xl:w-3/4 px-10 md:px-20 lg:px-20 xl:px-20 self-center relative bottom-72">
          <h1 className="my-4 text-3xl md:text-5xl font-roboto font-medium text-bensonpink">
            {post.frontmatter.title}
          </h1>
          <AuthorBlob
            date={new Date(post.frontmatter?.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            image={post.frontmatter?.author_image || siteMetaData.author.image}
            author={post.frontmatter?.author || siteMetaData.author.name}
            timeToRead={post.readingTime.text}
          />
          <article className="prose max-w-none font-roboto text-lg font text-bensonblack">
            <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
          </article>
          <p className="text-bensonpink text-lg mt-8">
            Tags:{" "}
            {post.frontmatter.tags &&
              post.frontmatter.tags.map((tag: string) => `#${tag} `)}
          </p>
        </div>
      </main>
    </div>
  );
}
