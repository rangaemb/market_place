import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/clientui',
  output: 'standalone', 
  images: {
    // Disable the default loader
    loader: 'custom',
    // Point to our custom loader function
    loaderFile: './lib/loader.ts',
  },
};

export default nextConfig;
