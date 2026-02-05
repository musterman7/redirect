/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://four.meme?code=ANGX96R5HJFP",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
