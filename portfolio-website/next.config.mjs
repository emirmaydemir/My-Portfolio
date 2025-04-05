/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true, // Bu satırı ekleyin
    remotePatterns: [
      {
        protocol: "https", // Protokol
        hostname: "res.cloudinary.com", // Cloudinary alan adı
        port: "", // Port yoksa boş bırakabilirsiniz
        pathname: "/**", // Tüm yollar için geçerli
      },
    ],
  },
};

export default nextConfig;
