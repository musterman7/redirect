/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://gmgn.ai/r/tFWXJd6e?chain=bsc",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
