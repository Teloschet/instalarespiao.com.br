// import createNextDocsMDX from 'fumadocs-mdx/config'
import nextIntl from 'next-intl/plugin'

// const withMDX = createNextDocsMDX()

// Configure the plugin with Next.js configuration
const withNextIntl = nextIntl()

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl(
  // withMDX({
  {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
        },
      ],
    },
  }
  // }),
)

export default nextConfig