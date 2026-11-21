/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 75],
    remotePatterns: [{ protocol: "https", hostname: "www.orchidee-pflegedienst.de" }],
  },
};
export default nextConfig;
