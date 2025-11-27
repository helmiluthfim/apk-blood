/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["img.youtube.com"], // Tambahkan domain YouTube
  },
};

export default nextConfig;
