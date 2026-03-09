/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://four.meme/token/0x8d72e879c6274b2af4642ad2e240910de541ffff?code=5J95FU49249Z",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
