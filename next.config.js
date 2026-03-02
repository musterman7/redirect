/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://four.meme?code=5J95FU49249Z",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
