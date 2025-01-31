import type { NextConfig } from 'next';
import { config } from 'process';

const nextConfig: NextConfig = {
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
