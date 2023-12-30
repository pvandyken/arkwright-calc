const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT_APP ? 'export' : undefined,
  reactStrictMode: true,
  basePath: '/arkwright-calc',
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    }
  },
}

module.exports = withVanillaExtract(nextConfig)
