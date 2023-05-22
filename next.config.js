/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "pub-74519fc56dd141d29ff5ef6aa3030ad9.r2.dev",
        port: '',
        pathname: '/shocked.png'
      }
    ]
  }
}

module.exports = nextConfig
