/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: require.resolve(path.join(__dirname, '/public/js/main.js')),
      use: [
        {
          loader: 'expose-loader',
          options: 'jQuery',
        },
        {
          loader: 'expose-loader',
          options: '$',
        },
        {
          loader: 'imports-loader',
          options: {
            type: 'commonjs',
            imports: [
              'jquery',
            ],
          },
        },
      ],
    });

    return config;
  },

   ...nextConfig
};
