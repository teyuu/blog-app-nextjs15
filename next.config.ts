import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"images.unsplash.com",
        protocol:"https",
        port:""
      },
      {
        hostname:"lh3.googleusercontent.com",
        protocol:"https",
        port:""
      },
      {
        hostname:"picsum.photos",
        protocol:"https",
        port:""
      },
      {
        hostname:"i.pravatar.cc",
        protocol:"https",
        port:""
      },
      
    ]
  }
};

export default nextConfig;
