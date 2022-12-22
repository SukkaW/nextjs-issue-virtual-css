const VirtualModulesPlugin = require('webpack-virtual-modules');

const virtualModules = new VirtualModulesPlugin({
  'styles/1.css': '.red { font-size: 32px; color: red; }',
  'styles/2.css': '.green { font-size: 32px; color: red; }'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(virtualModules);
    return config;
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
