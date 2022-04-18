const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const path = require('path');
const { parsed: localEnv } = require('dotenv').config();

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: [/\.svg$/],
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
};

module.exports = withPlugins(
  [
    [withImages, { exclude: path.join(__dirname, 'src/assets/images') }],
    withFonts,
  ],
  nextConfig
);
