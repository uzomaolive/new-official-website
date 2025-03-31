import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogPostCard from "@/app/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Olive Uzoma's Blog",
  description: "Exploring technology, design, and personal growth through words.",
  openGraph: {
    url: "https://oliveuzoma.com/blog",
    title: "Olive Uzoma's Blog",
    description: "Exploring technology, design, and personal growth through words.",
    images: [
      {
        url: "https://oliveuzoma.com/images/olive-uzoma-logo.png",
        width: 1200,
        height: 630,
        alt: "Olive Uzoma's Logo",
      },
    ],
    siteName: "Olive Uzoma",
  },
  twitter: {
    creator: "@OliveUzoma",
    card: "summary_large_image",
    title: "Olive Uzoma's Blog",
    description: "Exploring technology, design, and personal growth through words.",
    images: {
      url: "https://oliveuzoma.com/images/olive-uzoma-logo.png",
      alt: "Olive Uzoma's Logo",
    },
  },
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col pt-20">
      <header className="flex flex-col items-center text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold text-purple-600">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Sharing insights on technology, design, and personal experiences. Grab a coffee and enjoy the read!
        </p>
      </header>
      <main className="container mx-auto py-12 px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard key={index} post={post} />
        ))}
      </main>
    </div>
  );
}