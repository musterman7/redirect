/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://four.meme?code=U94UF59BMLDE",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
