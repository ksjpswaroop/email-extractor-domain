module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://localhost:3000',
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/emailExtractor');
    }
    return config;
  },
};