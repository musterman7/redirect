/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://four.meme?code=C5UE2M5H89FC",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
