import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Replace domains with remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      // Add oliveuzoma.com if you're using images from there
      {
        protocol: 'https',
        hostname: 'oliveuzoma.com',
        pathname: '**',
      },
      // Add any other domains you need for images
    ],
  },
  
};

export default nextConfig;