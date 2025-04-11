import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog',
          destination: process.env.BLOG_URL || '',
        },
        {
          source: '/blog/:slug',
          destination: process.env.BLOG_URL
            ? `${process.env.BLOG_URL}/:slug`
            : '',
        },
      ],
    }
  },
}

export default nextConfig

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
