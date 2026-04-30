/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "barnhardtperformance.com",
          },
        ],
        destination: "https://www.barnhardtperformance.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

