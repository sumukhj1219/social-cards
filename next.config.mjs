/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/**",
        },
        {
          pathname: "/**",
          protocol: "https",
          hostname: "assets.aceternity.com"
        }
      ],
    },
  };
  
  export default nextConfig;
  