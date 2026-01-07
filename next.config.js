const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Add polyfills for buffer and process
      config.resolve.alias = {
        ...config.resolve.alias,
        buffer: require.resolve('buffer'),
        process: require.resolve('process/browser'),
      };
      
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
