module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your allowed image domains here
  },
  env: {
    API_URL: process.env.API_URL, // Add your API URL here
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
};