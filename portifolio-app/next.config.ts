import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images/',
        },
      },
    })
    return config
  },
}

export default nextConfig